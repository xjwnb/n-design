/*
 * @Author: your name
 * @Date: 2021-11-24 16:59:46
 * @LastEditTime: 2021-11-24 17:29:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\divider\index.tsx
 */

import { CSSProperties } from "react";
import Style from "./index.module.scss";

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
  } = Props;

  return (
    <div
      className={[
        Style.n_divider,
        Style[`n_divider_${type}`],
        dashed ? Style.n_divider_dashed : "",
        children ? Style.n_divider_with_text : "",
        className,
      ].join(" ")}
      style={{
        ...style,
      }}
    >
      <span className={Style.n_divider_inner_text}>{children}</span>
    </div>
  );
}

export default Divider;
