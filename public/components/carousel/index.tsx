/*
 * @Author: your name
 * @Date: 2021-11-30 09:54:18
 * @LastEditTime: 2021-12-01 16:22:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\carousel\index.tsx
 */
import React, { useState, useEffect, useRef } from "react";
// style
import Style from "./index.module.scss";

interface IProps {
  children: Array<React.ReactNode>;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

function Carousel(Props: IProps) {
  const { children, autoplay = false, autoplaySpeed = 3000 } = Props;

  const [childNode, setchildNode] = useState(children);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [width, setwidth] = useState(0);
  const [translateX, settranslateX] = useState(0);
  const [hasTransition, sethasTransition] = useState(false);

  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      setwidth(e.currentTarget.innerWidth);
    });
  }, []);

  useEffect(() => {
    setwidth(elRef.current?.offsetWidth || 0);
    let nowEl: Array<any> = [];
    if (children instanceof Array) {
      nowEl = nowEl.concat(childNode);
    } else {
      nowEl.push([childNode]);
    }

    if (nowEl.length < children.length + 2) {
      nowEl.unshift(nowEl[nowEl.length - 1]);
      nowEl.push(nowEl[1]);
    }

    for (let i = 0; i < nowEl.length; i++) {
      if (i === 0) {
        nowEl[i] = React.cloneElement(nowEl[0], {
          index: -1,
        });
      } else if (i === nowEl.length - 1) {
        nowEl[i] = React.cloneElement(nowEl[i], { index: 0 });
      } else {
        nowEl[i] = React.cloneElement(nowEl[i], { index: i - 1 });
      }
    }
    setchildNode(nowEl);
    // eslint-disable-next-line
  }, [children]);

  useEffect(() => {
    autoplay && sethasTransition(true);
  }, [autoplay]);

  useEffect(() => {
    settranslateX(initContainerLocation(currentIndex));
    // eslint-disable-next-line
  }, [currentIndex, children]);

  /**
   * 初始化容器定位
   */
  const initContainerLocation = function (index: number) {
    let result = 0;
    result = -width * (index + 1);

    return result;
  };

  useEffect(() => {
    let timer: any = null;
    if (autoplay) {
      clearInterval(timer);
      timer = setInterval(() => {
        if (currentIndex === children.length - 1) {
          setcurrentIndex(currentIndex + 1);
          setcurrentIndex(0);
        } else {
          sethasTransition(true);
          setcurrentIndex(currentIndex + 1);
        }
      }, autoplaySpeed);
    }

    return () => {
      autoplay && clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [autoplay, autoplaySpeed, currentIndex, hasTransition]);

  return (
    <div className={[Style.n_carousel].join(" ")} ref={elRef}>
      <div
        style={{
          width: width * (childNode as []).length,
          transform: `translateX(${translateX}px)`,
          transition: hasTransition ? "all 1s" : "",
        }}
        className={[Style.n_carousel_list].join(" ")}
      >
        {Array.from(childNode as []).map((item: any, index) => (
          <div
            className={[Style.n_carousel_container].join(" ")}
            data-index={item?.props.index}
            key={index}
            style={{
              width: width,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* list */}
      <ul className={[Style.n_carousel_dots].join(" ")}>
        {children?.map((item, index) => (
          <li
            className={[
              currentIndex === index ? Style.n_carousel_dots_active : "",
            ].join(" ")}
            key={index}
            onClick={() => {
              setcurrentIndex(index);
            }}
          >
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
