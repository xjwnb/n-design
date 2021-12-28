/*
 * @Author: your name
 * @Date: 2021-12-28 09:43:53
 * @LastEditTime: 2021-12-28 11:03:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\rate\index.tsx
 */
import React, { useState, useEffect, useRef } from "react";
import Style from "./index.module.scss";
import { FivePointedStar } from "../../Icons/icon/index";

interface IProps {}

function Rate(Props: IProps) {
  const [hoverVal, sethoverVal] = useState(0);
  const [val, setval] = useState(0);

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ulRef.current?.addEventListener("mousemove", (e: any) => {
      let target = null;
      if (e.target.localName !== "span") {
        target = e.target.parentElement;
        let idx = target.dataset.index;
        idx && sethoverVal(Number(idx));
      }
    });
    ulRef.current?.addEventListener("mouseleave", () => {
      sethoverVal(val);
    });
  }, [val]);

  /**
   * 点击 li
   */
  const handleClickLi = function (value: number) {
    setval(value);
  };

  return (
    <div className={[Style.n_rate].join(" ")}>
      <ul ref={ulRef}>
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <li key={item} onClick={() => handleClickLi(item + 1)}>
              <span
                data-index={item + 1}
                className={[
                  hoverVal === item + 1 ? Style.n_rate_span_active : "",
                ].join(" ")}
              >
                <FivePointedStar
                  data-index={item + 1}
                  width={20}
                  height={20}
                  color={hoverVal >= item + 1 ? "#FADB14" : "#F0F0F0"}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Rate;