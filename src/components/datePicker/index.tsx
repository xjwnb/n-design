/*
 * @Author: your name
 * @Date: 2021-12-03 15:13:35
 * @LastEditTime: 2021-12-03 17:06:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\datePicker\index.tsx
 */
import { useState } from "react";
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

  /**
   * 输入框获得焦点
   */
  const handleFocusInput = function () {
    setshowPanel(true);
  };

  /**
   * 输入框失去焦点
   */
  const handleBlurInput = function () {
    setshowPanel(false);
  };

  return (
    <div className={[Style.n_datePicker].join(" ")}>
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
