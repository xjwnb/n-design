/*
 * @Author: your name
 * @Date: 2021-11-24 16:59:46
 * @LastEditTime: 2021-11-25 09:08:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\divider\index.tsx
 */

import { CSSProperties } from "react";
import "./index.scss";
import classnames from "classnames";

interface IProps {
  type?: "horizontal" | "vertical";
  dashed?: boolean;
  plain?: boolean;
  orientation?: "left" | "right" | "center";
  style?: CSSProperties;
  className?: string;
  children?: any;
}

function Divider(Props: IProps) {
  const {
    className,
    style = {},
    type = "horizontal",
    dashed = false,
    children = undefined,
    orientation = "center",
  } = Props;

  return (
    <div
      className={classnames(
        "n_divider",
        `n_divider_${type}`,
        dashed ? "n_divider_dashed" : "",
        children && orientation === "center" ? "n_divider_with_text" : "",
        children && orientation === "left" ? "n_divider_with_text_left" : "",
        children && orientation === "right" ? "n_divider_with_text_right" : "",
        className
      )}
      style={{
        ...style,
      }}
    >
      <span className={classnames("n_divider_inner_text")}>{children}</span>
    </div>
  );
}

export default Divider;
