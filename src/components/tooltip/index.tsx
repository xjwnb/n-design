/*
 * @Author: your name
 * @Date: 2021-11-29 08:53:10
 * @LastEditTime: 2021-11-30 09:04:26
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

  // const [offsetVal, setoffsetVal] = useState(0);
  const [top, settop] = useState<number | string>(0);
  // const [height, setheight] = useState<number | string>(0);
  const [left, setleft] = useState<number | string>(0);
  const [showTip, setshowTip] = useState(false);

  const childRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(childRef);
    // let offsetWidth = childRef.current?.offsetWidth;
    childRef.current?.addEventListener("mousemove", () => {
      setshowTip(true);
    });
    childRef.current?.addEventListener("mouseleave", () => {
      setshowTip(false);
    });
    let titleOffsetWidth = titleRef.current?.offsetWidth;
    // setoffsetVal(titleOffsetWidth || 0);
    if (["leftTop"].includes(placement)) {
      settop(0);
    } else if (["left", "right"].includes(placement)) {
      settop("-50%");
    } else if (["top"].includes(placement)) {
      console.log(childRef.current?.offsetWidth, titleRef.current?.offsetWidth);
      console.log(
        ((childRef.current?.offsetWidth || 0) -
          (titleRef.current?.offsetWidth || 0)) /
          2
      );
      setleft(
        ((childRef.current?.offsetWidth || 0) -
          (titleRef.current?.offsetWidth || 0)) /
          2
      );
      settop(
        -(childRef.current?.offsetHeight || 0) -
          (titleRef.current?.offsetHeight || 0) +
          8
      );
    } else if (["bottom", "bottomLeft", "bottomRight"].includes(placement)) {
      settop((childRef.current?.offsetHeight || 0) + 8);
    } else if (["topLeft", "topRight"].includes(placement)) {
      settop(-(childRef.current?.offsetHeight || 0) - 30);
    } else if (["rightBottom", "leftBottom"].includes(placement)) {
      // settop()
      settop(
        (childRef.current?.offsetHeight || 0) -
          (titleRef.current?.offsetHeight || 0)
      );
    } else {
      settop("");
    }

    if (["left", "leftBottom", "leftTop"].includes(placement)) {
      setleft(-(titleOffsetWidth || 0) - 20);
    } else if (["topRight", "bottomRight"].includes(placement)) {
      // setleft("");

      setleft(
        (childRef.current?.offsetWidth || 0) -
          (titleRef.current?.offsetWidth || 0)
      );
    } else if (["bottom"].includes(placement)) {
      setleft(
        ((childRef.current?.offsetWidth || 0) -
          (titleRef.current?.offsetWidth || 0)) /
          2
      );
    } else if (["right", "rightTop", "rightBottom"].includes(placement)) {
      setleft((childRef.current?.offsetWidth || 0) + 20);
    }
  }, [title, placement]);

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
            // opacity: showTip ? "1" : "0",
            // display: showTip ? "block" : "none",
            visibility: showTip ? "visible" : "hidden",
            left: left,
            // bottom: ["leftBottom"].includes(placement) ? 0 : "none",
            top: top /* ["leftTop"].includes(placement)
              ? 0
              : ["left"].includes(placement)
              ? "-50%"
              : "", */,
          }}
          ref={titleRef}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

export default Tooltip;
