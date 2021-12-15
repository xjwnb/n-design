/*
 * @Author: your name
 * @Date: 2021-11-18 14:22:05
 * @LastEditTime: 2021-11-19 16:00:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\row\index.tsx
 */
import { ReactElement, useState, useEffect, createContext } from "react";
// style
import Style from "./index.module.scss";

interface rowProps {
  gutter?: number | Array<number>;
  children: ReactElement | Array<ReactElement>;
  justify?: "start" | "center" | "end" | "space-between" | "space-around" | "";
  align?: "top" | "middle" | "bottom" | "";
  className?: string;
}

const justifyConfig = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  "space-between": "space-between",
  "space-around": "space-around",
};

const aliginConfig = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

interface rowContext {
  gutter: number;
}

export const RowContext = createContext<rowContext>({
  gutter: 0,
});

function Row(Props: rowProps) {
  const { children, gutter = 0, justify = "", align = "", className } = Props;

  const [gutterValue] = useState(gutter);
  const [mgl, setmgl] = useState(0);
  const [rowGap, setrowGap] = useState(0);

  useEffect(() => {
    if (gutterValue instanceof Array) {
      setmgl(gutterValue[0] || 0);
      setrowGap(gutterValue[1] || 0);
    }
  }, [gutterValue]);

  return (
    <div
      className={[Style.n_row, className].join(" ")}
      style={{
        marginLeft: `-${mgl / 2}px`,
        marginRight: `-${mgl / 2}px`,
        rowGap: `${rowGap}px`,
        justifyContent: justify ? justifyConfig[justify] : "",
        alignItems: align ? aliginConfig[align] : "",
      }}
    >
      <RowContext.Provider
        value={{
          gutter: mgl,
        }}
      >
        {children}
      </RowContext.Provider>
    </div>
  );
}

export default Row;
