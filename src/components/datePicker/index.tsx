/*
 * @Author: your name
 * @Date: 2021-12-03 15:13:35
 * @LastEditTime: 2021-12-04 09:02:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\datePicker\index.tsx
 */
import React, { useState, useEffect, useRef } from "react";
// component
import { Input } from "../index";
// Style
import Style from "./index.module.scss";
// icon
import {
  Calendar,
  DoubleLeft,
  Left,
  Right,
  DoubleRight,
} from "../../Icons/icon/index";

interface IProps {
  picker?: "date" | "week" | "month" | "year" | "quarter";

  onChange?: Function;
}

function DatePicker(Props: IProps) {
  const { picker = "date" } = Props;

  const [showPanel, setshowPanel] = useState(false);

  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(datePickerRef);
    /* datePickerRef.current?.addEventListener("click", () => {
      console.log("ref:", "...");
    }); */

    /**
     * 点击触发事件
     */
    const handleBodyClick = function (e: any) {
      let flag = handleClickEle(e.target, datePickerRef.current);
      if (!flag) {
        setshowPanel(false);
      } else {
        setshowPanel(true);
      }
    };
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  /**
   * 点击的元素是否为当前组件中
   */
  const handleClickEle = function (currentEle: any, target: any) {
    if (currentEle === target) {
      return true;
    }

    let parent = currentEle.parentElement;

    while (true) {
      if (parent === target) {
        return true;
      }
      if (parent === document.body) {
        return false;
      }
      parent = parent.parentElement;
    }
  };

  /**
   * 输入框获得焦点
   */
  const handleFocusInput = function () {
    // setshowPanel(true);
  };

  /**
   * 输入框失去焦点
   */
  const handleBlurInput = function () {
    // setshowPanel(false);
  };

  /**
   * 获取 picker 容器
   */
  // const handleClickPickerContainer = function () {
  //   setshowPanel(true);
  // };

  return (
    <div className={[Style.n_datePicker].join(" ")} ref={datePickerRef}>
      <Input
        suffix={<Calendar />}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
      />

      <div
        className={[Style.n_datePicker_panel_container].join(" ")}
        style={{
          display: showPanel ? "block" : "none",
        }}
        // onClick={handleClickPickerContainer}
      >
        <PickerPanel />
      </div>
    </div>
  );
}

/**
 * PickerPanel
 */
function PickerPanel() {
  return (
    <div
      className={[Style.n_picker_panel].join(" ")}
      style={{
        width: 280,
      }}
    >
      <div className={[Style.n_picker_header].join(" ")}>
        <div className={[Style.n_picker_header_left].join(" ")}>
          <span className={[Style.n_picker_header_icon].join(" ")}>
            <DoubleLeft />
          </span>
          <span className={[Style.n_picker_header_icon].join(" ")}>
            <Left />
          </span>
        </div>
        <div className={[Style.n_picker_header_text].join(" ")}>什么玩意</div>
        <div className={[Style.n_picker_header_right].join(" ")}>
          <span className={[Style.n_picker_header_icon].join(" ")}>
            <Right />
          </span>
          <span className={[Style.n_picker_header_icon].join(" ")}>
            <DoubleRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
