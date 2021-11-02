import { useEffect, useState } from "react";
import style from "./index.module.scss";

interface IProps {
  children: Array<any>;
  direction?: "vertical" | "horizontal";
  size?: "small" | "middle" | "large" | number | Array<number>;
  align?: "start" | "end" | "center" | "baseline";
  className?: string;
  wrap?: boolean;
}

const sizeOption = {
  small: 8,
  middle: 16,
  large: 24,
};

function Space(Props: IProps) {
  const {
    children,
    direction,
    size = "small",
    align,
    className,
    wrap = false,
  } = Props;

  const [gap, setgap] = useState<string>("8px");

  useEffect(() => {
    // setgap(sizeOption[size]);
    if (size instanceof Array) {
      // setgap(size + "px");
      setgap(
        size
          .reverse()
          .map((item) => {
            return item + "px";
          })
          .join(" ")
      );
    } else if (typeof size === "string") {
      setgap(sizeOption[size] + "px");
    } else if (typeof size === "number") {
      setgap(size + "px");
    }
  }, [size]);

  return (
    <div
      className={[
        `${style.n_space}`,
        `${direction ? style[`n_space_${direction}`] : ""}`,
        `${align ? style[`n_space_${align}`] : ""}`,
        `${className}`,
      ].join(" ")}
      style={{
        gap: gap,
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children.map((item, index) => (
        <div key={index} className={style.n_space_item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Space;
