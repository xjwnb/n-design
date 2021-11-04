/*
 * @Author: your name
 * @Date: 2021-11-02 10:44:07
 * @LastEditTime: 2021-11-03 22:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\select\index.tsx
 */
import { useState, useRef, useEffect } from "react";
// import Style from "./index.module.scss";
import "./index.scss";
import { Bottom } from "../../Icons/icon/index";

interface IProps {
  children: any;
  placeholder?: string;
  style?: object;
}

function Select(Props: IProps) {
  const { placeholder = "", style, children } = Props;

  const [isShowOptions, setisShowOptions] = useState<boolean>(false);
  const [isShowBorder, setisShowBorder] = useState<boolean>(false);

  const inputContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(inputContainer.current);
    inputContainer.current?.addEventListener("mouseover", () => {
      setisShowBorder(true);
    });
    inputContainer.current?.addEventListener("mouseleave", () => {
      setisShowBorder(false);
    });
  }, [inputContainer]);

  useEffect(() => {
    document.body.addEventListener("click", (e: MouseEvent) => {
      console.log(e);
    });
  }, []);

  /**
   * 点击选择器
   */
  const handleClickSelect = function () {
    setisShowOptions(!isShowOptions);
  };

  return (
    <div
      className={"n_select"}
      style={{
        ...style,
      }}
    >
      {/* <div> */}
      <div
        className={"n_select_input_container"}
        onClick={handleClickSelect}
        style={{
          border:
            isShowOptions || isShowBorder
              ? "1px solid #1890ff"
              : "1px solid #D9D9D9",
          boxShadow: isShowOptions ? "0 0 2px #1890ff" : "",
        }}
        ref={inputContainer}
      >
        <span className={"n_select_input"}>
          <input type="text" placeholder={placeholder} readOnly />
        </span>
        <span className={"n_select_icon"}>
          <Bottom />
        </span>
      </div>

      {/* options */}
      {isShowOptions && (
        <div className={"n_select_options_container"}>{children}</div>
      )}
      {/* </div> */}
    </div>
  );
}

/**
 * Option
 */

interface optionProps {
  value: string;
  children: string;
}

function Option(Props: optionProps) {
  const { children } = Props;

  return <>{children}</>;
}

Select.Option = Option;

export default Select;
