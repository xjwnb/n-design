/*
 * @Author: your name
 * @Date: 2021-12-15 15:06:34
 * @LastEditTime: 2021-12-15 17:12:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\drawer\index.tsx
 */
import React, { useState, useEffect } from "react";
import { Close } from "../../Icons/icon/index";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
  placement?: "top" | "left" | "bottom" | "right";
  width?: number | string;
  height?: number | string;
  visible: boolean;
  title?: React.ReactNode;

  onClose?: Function;
}

function Drawer(Props: IProps) {
  const {
    children,
    placement = "right",
    width = 378,
    height = 256,
    visible = false,
    title,
    onClose,
  } = Props;

  const [wrapperStyle, setwrapperStyle] = useState({});
  // const [drawerStyle, setdrawerStyle] = useState({});

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [visible]);

  useEffect(() => {
    if (["right", "left"].includes(placement)) {
      setwrapperStyle({
        ...wrapperStyle,
        width,
      });
    } else {
      setwrapperStyle({
        ...wrapperStyle,
        height,
      });
    }
    // eslint-disable-next-line
  }, [placement, width, height, visible]);

  /**
   * 点击 close 图标
   */
  const handleClose = function () {
    onClose?.();
  };

  return (
    <div
      className={["n_drawer", `n_drawer_placement_${placement}`].join(" ")}
      style={{
        display: visible ? "block" : "none",
      }}
    >
      <div className={["n_drawer_mask"].join(" ")}></div>
      {/* content */}
      <div
        className={["n_drawer_wrapper"].join(" ")}
        style={{
          ...wrapperStyle,
        }}
      >
        <div className={["n_drawer_header"].join(" ")}>
          <div className={["n_drawer_header_title"].join(" ")}>{title}</div>
          <div
            className={["n_drawer_header_close"].join(" ")}
            onClick={handleClose}
          >
            <Close />
          </div>
        </div>
        <div className={["n_drawer_content"].join(" ")}>{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
