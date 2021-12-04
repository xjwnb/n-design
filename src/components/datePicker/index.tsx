/*
 * @Author: your name
 * @Date: 2021-12-03 15:13:35
 * @LastEditTime: 2021-12-04 11:10:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\datePicker\index.tsx
 */
import React, { useState, useEffect, useRef, memo } from "react";
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

const weekList = ["一", "二", "三", "四", "五", "六", "日"];

const Panel = memo(PickerPanel);

interface IProps {
  picker?: "date" | "week" | "month" | "year" | "quarter";

  onChange?: Function;
}

function DatePicker(Props: IProps) {
  // eslint-disable-next-line
  const { picker = "date" } = Props;

  const [showPanel, setshowPanel] = useState(false);
  const [currentTime, setcurrentTime] = useState<{
    year: string | number;
    month: string | number;
    date: string | number;
  }>({
    year: "",
    month: "",
    date: "",
  });
  const [dayArr, setdayArr] = useState<number[]>([]);
  const [firstIndex, setfirstIndex] = useState(0);
  const [lastIndex, setlastIndex] = useState(0);

  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const date = new Date();
    setcurrentTime({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
    });

    FullMonthDateList({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
    });
  }, []);

  useEffect(() => {
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
   * 根据年月获取月某一天星期几
   */
  const getDateDay = function (
    year: number | string,
    month: number | string,
    day: number = 1
  ) {
    return new Date(Number(year), Number(month) - 1, day).getDay();
  };

  /**
   * 获取 42 个日期数组
   */
  const FullMonthDateList = function (current: {
    year: number;
    month: number;
    date: number;
  }) {
    const dayList: number[] = [];

    // 本月一号星期几
    let firstDay = getDateDay(current.year, current.month, 1);
    setfirstIndex(firstDay - 2);

    // 本月最后一天是几号
    let lastDate = new Date(current.year, current.month, 0).getDate();

    /**
     * 上一个月最后一天是几号
     */
    let lastMonthLastDate = new Date(
      current.year,
      current.month - 1,
      0
    ).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dayList.push(i);
    }

    if (firstDay) {
      for (let i = 0; i < firstDay - 1; i++) {
        dayList.unshift(lastMonthLastDate - i);
      }
    }

    let otherDay = 42 - dayList.length;
    setlastIndex(dayList.length - 1);

    if (otherDay) {
      for (let i = 1; i <= otherDay; i++) {
        dayList.push(i);
      }
    }
    setdayArr(dayList);
  };

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
      >
        {/* <PickerPanel day={dayArr} /> */}
        <Panel day={dayArr} firstIndex={firstIndex} lastIndex={lastIndex} />
      </div>
    </div>
  );
}

/**
 * PickerPanel
 */
interface PanelProps {
  day: number[];
  firstIndex: number;
  lastIndex: number;
}

function PickerPanel(Props: PanelProps) {
  const { day, firstIndex, lastIndex } = Props;

  console.log(day, firstIndex, lastIndex);
  return (
    <div
      className={[Style.n_picker_panel].join(" ")}
      style={{
        width: 280,
      }}
    >
      {/* header */}
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

      {/* body */}
      <div className={[Style.n_picker_body].join(" ")}>
        {day.length && (
          <table className={[Style.n_picker_content].join(" ")}>
            <thead>
              <tr>
                {weekList.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            {day.length && (
              <tbody>
                {day.length &&
                  [0, 1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      {day.length &&
                        [0, 1, 2, 3, 4, 5, 6].map((it) => (
                          <td
                            className={[
                              Style.n_picker_cell,
                              `${
                                item * 7 + it > firstIndex &&
                                item * 7 + it < lastIndex
                                  ? Style.n_picker_cell_in_view
                                  : ""
                              }`,
                            ].join(" ")}
                            key={day[item * 7 + it]}
                          >
                            <div
                              className={[Style.n_picker_cell_inner].join(" ")}
                            >
                              {day[item * 7 + it]}
                            </div>
                          </td>
                        ))}
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        )}
      </div>
    </div>
  );
}

export default DatePicker;
