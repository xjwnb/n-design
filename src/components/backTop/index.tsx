/*
 * @Author: your name
 * @Date: 2021-12-20 11:56:26
 * @LastEditTime: 2021-12-20 16:53:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\backTop\index.tsx
 */
import React, { useState, useEffect } from "react";
import { BackTop as BackTopIcon } from "../../Icons/icon/index";
import Style from "./index.module.scss";

interface IProps {
  children?: React.ReactNode;
  target?: () => React.ReactNode | Window | HTMLElement;
  visibilityHeight?: number;
  duration?: number;

  onClick?: () => void;
}

function BackTop(Props: IProps) {
  const {
    children,
    target = () => window,
    visibilityHeight = 400,
    duration = 450,
    onClick,
  } = Props;

  const [isShow, setisShow] = useState(false);
  const [isWindow, setisWindow] = useState(true);
  const [scrollTop, setscrollTop] = useState(0);
  const [intervalTime] = useState(2);
  const [targetElement, settargetElement] = useState<
    HTMLElement | HTMLDocument | HTMLDivElement
  >(window.document);

  useEffect(() => {
    if (target() === window) {
      setisWindow(true);
      addScrollEventByElement((target() as Window).document, visibilityHeight);
      settargetElement(window.document as HTMLDocument);
    } else {
      setisWindow(false);
      (target() as any).style.position = "relative";
      addScrollEventByElement(target() as HTMLDivElement, visibilityHeight);
      settargetElement(target() as HTMLDivElement);
    }
  }, [target, visibilityHeight]);

  /**
   * 给元素添加滚动事件
   */
  const addScrollEventByElement = function (
    targetEle: Document | HTMLElement | HTMLDivElement | HTMLDocument,
    heightNum: number
  ) {
    let scrollTop = 0;
    targetEle.addEventListener("scroll", () => {
      if (targetEle === window.document) {
        scrollTop = (targetEle as any)?.documentElement.scrollTop;
      } else {
        scrollTop = (targetEle as any).scrollTop;
      }
      setscrollTop(scrollTop);
      if (scrollTop >= heightNum) {
        setisShow(true);
      } else {
        setisShow(false);
      }
    });
  };

  /**
   * 点击
   */
  const handleClick = function () {
    onClick?.();
    let topNum = (scrollTop / (duration / intervalTime)) * 3;
    let target: any = null;
    if (isWindow) {
      target = (targetElement as any).documentElement;
    } else {
      target = targetElement;
    }
    let timer = setInterval(() => {
      if (target.scrollTop <= 0) {
        clearInterval(timer);
      } else {
        target.scrollTop = target.scrollTop - topNum;
      }
    }, intervalTime);
  };

  return (
    <div
      className={[
        Style.n_backTop,
        isWindow ? Style.n_backTop_window : Style.n_backTop_other,
      ].join(" ")}
      style={{
        display: isShow ? "block" : "none",
        bottom: isWindow ? 100 : -scrollTop + 100,
      }}
      onClick={handleClick}
    >
      {children ? children : <BackTopIcon width={50} height={50} />}
    </div>
  );
}

export default BackTop;
