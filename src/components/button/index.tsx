/*
 * @Author: your name
 * @Date: 2021-10-27 13:35:33
 * @LastEditTime: 2021-11-19 17:25:12
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

  style?: object;
  className?: string;
  htmlType?: "submit" | "button" | "reset";
  ref?: any;

  onClick?: Function;
};

function Button(Props: IProps) {
  const {
    children,
    type,
    size,
    shape,
    icon,
    block,
    disabled,
    danger,
    href,
    target,
    className,
    style: styleObj,
    htmlType = "button",
    ref,
    onClick,
  } = Props;

  const handleClick = function (event: SyntheticEvent) {
    if (href) {
      const aEle = document.createElement("a");
      aEle.setAttribute("href", href);
      target && aEle.setAttribute("target", target);
      document.body.appendChild(aEle);
      aEle.click();
    }
    onClick && onClick();
  };
  return (
    <button
      ref={ref}
      disabled={disabled && disabled !== undefined ? true : false}
      className={[
        `${style.n_btn}`,
        `${type ? `${style[`n_btn_${type}`]}` : ""}`,
        `${size && size === "large" ? style.n_btn_lg : ""}`,
        `${size && size === "small" ? style.n_btn_sm : ""}`,
        `${shape ? `${style[`n_btn_${shape}`]}` : ""}`,
        `${danger ? `${style.n_btn_dangerous}` : ""}`,
        `${className}`,
      ].join(" ")}
      style={{
        width: block ? "100%" : "",
        ...styleObj,
      }}
      onClick={handleClick}
      type={htmlType}
    >
      <div className={style.n_btn_content}>
        {/* Icon */}
        {icon && (
          <div className={style.btn_icon} style={{ paddingTop: 4 }}>
            {icon}
          </div>
        )}
        {/* children */}
        {children && (
          <div className={style.btn_icon} style={{ padding: "4px 0" }}>
            {children}
          </div>
        )}
      </div>
    </button>
  );
}

export default Button;
