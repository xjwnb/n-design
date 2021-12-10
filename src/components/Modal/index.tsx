/*
 * @Author: your name
 * @Date: 2021-12-09 16:36:41
 * @LastEditTime: 2021-12-10 10:09:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\Modal\index.tsx
 */
import { useRef, useState, useEffect } from "react";
import Style from "./index.module.scss";
// icon
import { Close } from "../../Icons/icon";
import Button from "../button";

interface IProps {
  visible: boolean;
  title: string;
  children: any;
  width?: number | string;

  onCancel?: Function;
  onOk?: Function;
}

function Modal(Props: IProps) {
  const {
    visible = false,
    children,
    width = 520,
    title,
    onCancel,
    onOk,
  } = Props;

  const wrapRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [visible]);

  useEffect(() => {
    /**
     * 点击触发事件
     */
    const handleBodyClick = function (e: any) {
      let flag = handleClickEle(e.target, modalRef.current);
      if (!flag) {
        onCancel?.();
      }
    };

    if (!visible) {
      wrapRef.current?.removeEventListener("click", handleBodyClick);
    }

    wrapRef.current?.addEventListener("click", handleBodyClick);

    return () => {
      wrapRef.current?.removeEventListener("click", handleBodyClick);
    };
  }, []);

  /**
   * 点击的元素是否为当前组件中
   */
  const handleClickEle = function (currentEle: any, target: any) {
    if (currentEle === target) {
      return true;
    }

    let parent = currentEle.parentElement;

    while (true) {
      if (parent === target) {
        return true;
      }
      if (parent === document.body) {
        return false;
      }
      if (parent && parent.parentElement) {
        parent = parent.parentElement;
      } else {
        return false;
      }
    }
  };

  /**
   * 关闭
   */
  const handleClose = function () {
    onCancel?.();
  };

  /**
   * 确定
   */
  const handleOk = function () {
    onOk?.();
  };

  return (
    <div
      className={Style.n_modal_root}
      style={{
        display: visible ? "block" : "none",
      }}
    >
      <div className={Style.n_modal_mask}></div>
      <div className={Style.n_modal_wrap} ref={wrapRef}>
        <div
          className={Style.n_modal}
          style={{
            width: width,
          }}
          ref={modalRef}
        >
          <div className={[Style.n_modal_content].join(" ")}>
            <div
              className={[Style.n_modal_close].join(" ")}
              onClick={handleClose}
            >
              <Close />
            </div>
            <div className={[Style.n_modal_header].join(" ")}>
              <div className={[Style.n_modal_title].join(" ")}>{title}</div>
            </div>
            <div className={[Style.n_modal_body].join(" ")}>{children}</div>
            <div className={[Style.n_modal_footer].join(" ")}>
              <Button onClick={handleClose}>取消</Button>
              <Button
                type="primary"
                style={{
                  marginLeft: 8,
                }}
                onClick={handleOk}
              >
                确定
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
