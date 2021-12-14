/*
 * @Author: your name
 * @Date: 2021-12-09 16:36:41
 * @LastEditTime: 2021-12-14 14:30:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\Modal\index.tsx
 */
import { useRef, useEffect, useState, CSSProperties } from "react";
import ReactDOM from "react-dom";
import Style from "./index.module.scss";
// icon
import { Close, Info, Success, Error, WarningCircle } from "../Icons/icon";
import Button from "../button";

interface IProps {
  visible: boolean;
  title: string;
  children: any;
  width?: number | string;
  okText?: string;
  cancelText?: string;
  footer?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: CSSProperties;
  zIndex?: number;

  onCancel?: Function;
  onOk?: Function;
}

function Modal(Props: IProps) {
  const {
    visible = false,
    children,
    width = 520,
    title,
    okText = "确定",
    cancelText = "取消",
    footer,
    closable = true,
    closeIcon = <Close />,
    mask = true,
    maskClosable = true,
    maskStyle = {},
    zIndex = 1000,
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
        if (!mask) return;
        if (!maskClosable) return;
        onCancel?.();
      }
    };

    if (!visible) {
      wrapRef.current?.removeEventListener("click", handleBodyClick);
    }

    wrapRef.current?.addEventListener("click", handleBodyClick);
    // eslint-disable-next-line
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
      {mask && (
        <div
          className={Style.n_modal_mask}
          style={{
            ...maskStyle,
          }}
        ></div>
      )}
      <div className={Style.n_modal_wrap} ref={wrapRef}>
        <div
          className={Style.n_modal}
          style={{
            width: width,
            zIndex,
          }}
          ref={modalRef}
        >
          <div className={[Style.n_modal_content].join(" ")}>
            {closable && (
              <div
                className={[Style.n_modal_close].join(" ")}
                onClick={handleClose}
              >
                {/* <Close /> */}
                {closeIcon}
              </div>
            )}
            <div className={[Style.n_modal_header].join(" ")}>
              <div className={[Style.n_modal_title].join(" ")}>{title}</div>
            </div>
            <div className={[Style.n_modal_body].join(" ")}>{children}</div>
            <div className={[Style.n_modal_footer].join(" ")}>
              {footer ? (
                footer
              ) : (
                <>
                  <Button onClick={handleClose}>{cancelText}</Button>
                  <Button
                    type="primary"
                    style={{
                      marginLeft: 8,
                    }}
                    onClick={handleOk}
                  >
                    {okText}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Modal.method()
 */
interface ConfirmProps {
  type?: "info" | "success" | "error" | "warning";
  title?: string;
  content?: string | React.ReactNode;
  width?: number | string;
  zIndex?: number;
  icon?: React.ReactNode;
  maskStyle?: object;

  onOk?: Function;
}
function Confirm(Props: ConfirmProps) {
  const {
    title,
    type,
    content,
    width = 416,
    zIndex = 1000,
    icon,
    maskStyle = {},
    onOk,
  } = Props;
  console.log("title", Props);

  const [idName] = useState(
    `n_modal_confirm${(Math.random() * (1000000 - 1) + 1).toFixed(0)}`
  );
  const [iconNode, seticonNode] = useState(
    <Info width={22} height={22} color="#52ACFF" />
  );

  useEffect(() => {
    switch (type) {
      case "info":
        seticonNode(<Info width={22} height={22} color="#52ACFF" />);
        break;
      case "success":
        seticonNode(<Success width={22} height={22} color="#6CCD3C" />);
        break;
      case "error":
        seticonNode(<Error width={22} height={22} color="#FF6869" />);
        break;
      case "warning":
        seticonNode(<WarningCircle width={22} height={22} color="#FAAD14" />);
        break;
    }
  }, [type]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /**
   * 点击确定
   */
  const handleClickOK = function () {
    // 删除卸载组件
    ReactDOM.unmountComponentAtNode(
      document.getElementById(idName)?.parentElement as Element
    );
    // 触发回调
    onOk?.();
  };

  return (
    <div id={idName} className={[Style.n_modal_root].join(" ")}>
      <div className={Style.n_modal_mask} style={{ ...maskStyle }}></div>
      <div className={Style.n_modal_wrap}>
        <div
          className={Style.n_modal}
          style={{
            width,
            zIndex,
          }}
        >
          <div className={[Style.n_modal_content].join(" ")}>
            <div className={[Style.n_modal_body].join(" ")}>
              <div className={[Style.n_modal_confirm_wrapper].join(" ")}>
                {/* {title} */}
                <div className={[Style.n_modal_confirm_body].join(" ")}>
                  {icon ? <span>{icon}</span> : <span>{iconNode}</span>}
                  <div className={[Style.n_modal_confirm_info].join(" ")}>
                    {title && (
                      <div className={[Style.n_modal_confirm_title].join(" ")}>
                        {title}
                      </div>
                    )}
                    {content && (
                      <div
                        className={[Style.n_modal_confirm_content].join(" ")}
                      >
                        {content}
                      </div>
                    )}
                  </div>
                </div>
                <div className={[Style.n_modal_confirm_btns].join(" ")}>
                  <Button type="primary" onClick={handleClickOK}>
                    知道了
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 *
 */
function ConfirmControl(Props: ConfirmProps) {
  const el = document.createElement("div");
  document.getElementById("root")?.appendChild(el);
  ReactDOM.render(<Confirm {...Props} />, el);
}

Modal.info = (config: ConfirmProps) =>
  ConfirmControl({ ...config, type: "info" });
Modal.success = (config: ConfirmProps) =>
  ConfirmControl({ ...config, type: "success" });
Modal.error = (config: ConfirmProps) =>
  ConfirmControl({ ...config, type: "error" });
Modal.warning = (config: ConfirmProps) =>
  ConfirmControl({ ...config, type: "warning" });

export default Modal;
