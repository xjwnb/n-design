/*
 * @Author: your name
 * @Date: 2021-10-27 13:35:33
 * @LastEditTime: 2021-10-28 14:27:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\button\index.tsx
 */
import style from "./style.module.scss";
// import { FC, ClassicComponent } from "react";
import { ReactElement, SyntheticEvent } from "react";

type typeValue = "primary" | "dashed" | "text" | "link" | "";
type sizeValue = "large" | "default" | "small" | "";

type IProps = {
  children?: String | undefined | "";
  type?: typeValue;
  size?: sizeValue;
  shape?: "circle" | "";
  icon?: ReactElement;
  block?: Boolean;
  disabled?: Boolean;
  danger?: Boolean;
  href?: string;
  target?: string;
  onClick?: Function
};

function Button(Props: IProps) {
  const { children, type, size, shape, icon, block, disabled, danger, href, target } = Props;

  const handleClick = function (event: SyntheticEvent) {
    console.log(event);
    if (href) {
      const aEle = document.createElement("a");
      aEle.setAttribute("href", href);
      target && aEle.setAttribute("target", target);
      document.body.appendChild(aEle);
      aEle.click();
    }
  };
  return (
    <button
      disabled={disabled && disabled !== undefined ? true : false}
      className={[
        `${style.n_btn}`,
        `${type ? `${style[`n_btn_${type}`]}` : ""}`,
        `${size && size === "large" ? style.n_btn_lg : ""}`,
        `${size && size === "small" ? style.n_btn_sm : ""}`,
        `${shape ? `${style[`n_btn_${shape}`]}` : ""}`,
        `${danger ? `${style.n_btn_dangerous}` : ""}`,
      ].join(" ")}
      style={{
        width: block ? "100%" : "",
      }}
      onClick={handleClick}
    >
      <>
        {/* Icon */}
        {icon && <span className={style.btn_icon}>{icon}</span>}
        {/* children */}
        {children && <span>{children}</span>}
      </>
    </button>
  );
}

export default Button;
