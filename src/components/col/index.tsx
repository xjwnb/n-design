/*
 * @Author: your name
 * @Date: 2021-11-18 14:30:02
 * @LastEditTime: 2021-11-19 16:23:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\col\index.tsx
 */
import { useContext } from "react";
import { RowContext } from "../row/index";
// style
import Style from "./index.module.scss";

interface colProps {
  span: number;
  offset?: number;
  children?: any;
  push?: number;
  pull?: number;
  className?: string;
}

function Col(Props: colProps) {
  const { children, span, offset = 0, push = 0, pull = 0, className } = Props;

  const { gutter } = useContext(RowContext);

  return (
    <div
      className={[`${gutter} && ${Style.gutter_row}`, className].join(" ")}
      style={{
        flex: span > 0 ? `0 0 ${(span / 24) * 100}%` : "",
        display: span === 0 ? "none" : "block",
        maxWidth: span > 0 ? `${(span / 24) * 100}%` : 0,
        paddingLeft: gutter && gutter > 0 ? `${gutter / 2}px` : 0,
        paddingRight: gutter && gutter > 0 ? `${gutter / 2}px` : 0,
        marginLeft: offset && `${(offset / 24) * 100}%`,
        position: push || pull ? "relative" : "initial",
        left: (push && `${(push / 24) * 100}%`) || "",
        right: (pull && `${(pull / 24) * 100}%`) || "",
      }}
    >
      {children}
    </div>
  );
}

export default Col;
