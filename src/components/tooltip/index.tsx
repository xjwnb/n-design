/*
 * @Author: your name
 * @Date: 2021-11-29 08:53:10
 * @LastEditTime: 2021-11-29 15:14:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\tooltip\index.tsx
 */
import { useRef, useEffect, useState } from "react";
// style
import Style from "./index.module.scss";

interface IProps {
  children: any;
  title: string;
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
}

function Tooltip(Props: IProps) {
  const { children, title, placement = "top" } = Props;

  const [offsetVal, setoffsetVal] = useState(0);

  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(childRef);
    let offsetWidth = childRef.current?.offsetWidth;
    console.dir(childRef.current);
    setoffsetVal(offsetWidth || 0);
    // console.log(offsetWidth);
  }, []);

  return (
    <div className={Style.n_tooltip}>
      <div className={Style.n_tooltip_content}>
        <span className={Style.n_tooltip_children} ref={childRef}>
          {children}
        </span>
        <span
          className={[
            Style.n_tooltip_title,
            placement !== "top" ? Style[`n_tooltip_title_${placement}`] : "",
          ].join(" ")}
          style={{
            left: ["left", "leftTop", "leftBottom"].includes(placement)
              ? -(offsetVal - 70)
              : 0,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

export default Tooltip;
