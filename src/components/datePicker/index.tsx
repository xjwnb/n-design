/*
 * @Author: your name
 * @Date: 2021-12-03 15:13:35
 * @LastEditTime: 2021-12-04 17:21:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\datePicker\index.tsx
 */
import React, {
  useState,
  useEffect,
  useRef,
  memo,
  BaseSyntheticEvent,
} from "react";
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
  const [nowTime, setnowTime] = useState<{
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
  const [dateValue, setdateValue] = useState("");

  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const date = new Date();
    setcurrentTime({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
    });
    setnowTime({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentTime.year) {
      FullMonthDateList({
        year: Number(currentTime.year),
        month: Number(currentTime.month),
      });
    }
    // eslint-disable-next-line
  }, [currentTime]);

  useEffect(() => {
    /**
     * 点击触发事件
     */
    const handleBodyClick = function (e: any) {
      let flag = handleClickEle(e.target, datePickerRef.current);
      if (!flag) {
        setshowPanel(false);
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
    setshowPanel(true);
  };

  /**
   * 输入框失去焦点
   */
  const handleBlurInput = function () {
    // setshowPanel(false);
  };

  /**
   * 输入框 onChange
   */
  const handleInputChange = function (e: any) {
    setdateValue("");
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

  /**
   * 点击选中当前日期
   */
  const handleSelectDate = function (value: string) {
    setdateValue(value);
    setshowPanel(false);
  };

  /**
   * 前一个月
   */
  const handleLeft = function () {
    let preMonth = Number(currentTime.month) - 1;
    preMonth = preMonth === 0 ? 12 : preMonth;
    let preYear =
      currentTime.month > 1 ? currentTime.year : Number(currentTime.year) - 1;
    setcurrentTime({
      year: preYear,
      month: preMonth,
      date: currentTime.date,
    });
  };

  /**
   * 后一个月
   */
  const handleRight = function () {
    let lastMonth = Number(currentTime.month) + 1;
    lastMonth = lastMonth > 12 ? 1 : lastMonth;
    let lastYear =
      currentTime.month === 12
        ? Number(currentTime.year) + 1
        : currentTime.year;
    setcurrentTime({
      year: lastYear,
      month: lastMonth,
      date: currentTime.date,
    });
  };

  /**
   * 上一年
   */
  const handleDoubleLeft = function () {
    if (currentTime.year) {
      setcurrentTime({
        year: Number(currentTime.year) - 1,
        month: currentTime.month,
        date: currentTime.date,
      });
    }
  };

  /**
   * 下一年
   */
  const handleDoubleRight = function () {
    if (currentTime.year) {
      setcurrentTime({
        year: Number(currentTime.year) + 1,
        month: currentTime.month,
        date: currentTime.date,
      });
    }
  };

  return (
    <div className={[Style.n_datePicker].join(" ")} ref={datePickerRef}>
      <Input
        suffix={<Calendar />}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        value={dateValue}
        onChange={handleInputChange}
      />

      <div
        className={[Style.n_datePicker_panel_container].join(" ")}
        style={{
          display: showPanel ? "block" : "none",
        }}
      >
        <Panel
          day={dayArr}
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          currentTime={currentTime}
          nowTime={nowTime}
          onSelectDate={handleSelectDate}
          selectTime={dateValue}
          onControl={{
            onLeft: handleLeft,
            onRight: handleRight,
            onDoubleLeft: handleDoubleLeft,
            onDoubleRight: handleDoubleRight,
          }}
          picker={picker}
        />
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
  currentTime: {
    year: number | string;
    month: number | string;
    date: number | string;
  };
  nowTime: {
    year: number | string;
    month: number | string;
    date: number | string;
  };
  selectTime: string;
  picker?: "date" | "week" | "month" | "year" | "quarter";

  onSelectDate: Function;
  onControl?: {
    onLeft?: Function;
    onRight?: Function;
    onDoubleLeft?: Function;
    onDoubleRight?: Function;
  };
}

function PickerPanel(Props: PanelProps) {
  const {
    picker = "date",
    day,
    firstIndex,
    lastIndex,
    currentTime,
    nowTime,
    onSelectDate,
    selectTime,
    onControl,
  } = Props;

  const [preTime, setpreTime] = useState<{
    year: string | number;
    month: string | number;
  }>({
    year: "",
    month: "",
  });
  const [lastTime, setlastTime] = useState<{
    year: string | number;
    month: string | number;
  }>({
    year: "",
    month: "",
  });
  // 选中的日期
  const [selectDateArr, setselectDateArr] = useState<Array<string>>([]);
  // week 数组
  const [weekNum, setweekNum] = useState<number[]>([]);
  const [weekIndex, setweekIndex] = useState(-1);
  // 选中 week 时候的年月
  const [weekTime, setweekTime] = useState<{
    year: string | number;
    month: string | number;
  }>({
    year: "",
    month: "",
  });

  const tobdyRef = useRef<any>(null);

  useEffect(() => {
    setselectDateArr(selectTime.split("-"));
  }, [selectTime]);

  useEffect(() => {
    if (picker === "week" && day.length > 0) {
      let indexArr: number[] = [];
      [0, 1, 2, 3, 4, 5].forEach((num) => {
        indexArr.push(num * 7);
      });

      let firstDayArr = indexArr.map((item) => {
        if (item < firstIndex) {
          return `${preTime.year}-${preTime.month}-${day[item]}`;
        } else if (item > lastIndex) {
          return `${lastTime.year}-${lastTime.month}-${day[item]}`;
        } else {
          return `${currentTime.year}-${currentTime.month}-${day[item]}`;
        }
      });
      let weeks = firstDayArr.map((item) => {
        let date = item.split("-");
        let numberDate = date.map((num) => Number(num));
        return getYearWeek(numberDate[0], numberDate[1], numberDate[2]) - 1;
      });
      setweekNum(weeks);
    }
  }, [picker, day, currentTime, firstIndex, lastIndex, lastTime, preTime]);

  useEffect(() => {
    let preMonth = Number(currentTime.month) - 1;
    preMonth = preMonth === 0 ? 12 : preMonth;
    let preYear =
      currentTime.month > 1 ? currentTime.year : Number(currentTime.year) - 1;
    setpreTime({
      year: preYear,
      month: preMonth,
    });

    let lastMonth = Number(currentTime.month) + 1;
    lastMonth = lastMonth > 12 ? 1 : lastMonth;
    let lastYear =
      currentTime.month === 12
        ? Number(currentTime.year) + 1
        : currentTime.year;

    setlastTime({
      year: lastYear,
      month: lastMonth,
    });
  }, [currentTime]);

  /**
   * 点击事件 tbody
   */
  const handleClickTbody = function (e: BaseSyntheticEvent) {
    if (e.target.title && picker === "date") {
      onSelectDate(e.target.title);
    } else if (picker === "week") {
      let parent = e.target.parentElement;
      let flag = false;
      while (true) {
        if (parent.localName === "tr") {
          flag = true;
          break;
        }
        if (parent === document.body) {
          break;
        }
        parent = parent.parentElement;
      }
      if (flag) {
        const toboyEle = tobdyRef.current;
        const child = toboyEle.children;
        let currentSelectIndex = 0;
        for (let i = 0; i < child.length; i++) {
          if (child[i] === parent) {
            currentSelectIndex = i;
            break;
          }
        }
        setweekIndex(currentSelectIndex);
        setweekTime({
          year: currentTime.year,
          month: currentTime.month,
        });

        onSelectDate(`${currentTime.year}-${weekNum[currentSelectIndex]}周`);
      }
    }
  };

  /**
   * left icon click
   */
  const handleLeft = function () {
    onControl?.onLeft && onControl.onLeft();
  };

  /**
   * right icon click
   */
  const handleRight = function () {
    onControl?.onRight && onControl.onRight();
  };

  /**
   * doubleLeft icon click
   */
  const handleDoubleLeft = function () {
    onControl?.onDoubleLeft && onControl.onDoubleLeft();
  };

  /**
   * doubleRight icon click
   */
  const handleDoubleRight = function () {
    onControl?.onDoubleRight && onControl.onDoubleRight();
  };

  // picker = "week"
  /**
   * 传入年月日返回改天在本年的第几周
   */
  const getYearWeek = function (year: number, month: number, date: number) {
    let dateNow = new Date(year, Number(month) - 1, date);
    let dateFirst = new Date(year, 0, 1);
    let dataNumber = Math.round(
      (dateNow.valueOf() - dateFirst.valueOf()) / 86400000
    );
    return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7);
  };

  return (
    <div
      className={[Style.n_picker_panel].join(" ")}
      style={{
        minWidth: 280,
      }}
    >
      {/* header */}
      <div className={[Style.n_picker_header].join(" ")}>
        <div className={[Style.n_picker_header_left].join(" ")}>
          <span
            className={[Style.n_picker_header_icon].join(" ")}
            onClick={handleDoubleLeft}
          >
            <DoubleLeft />
          </span>
          <span
            className={[Style.n_picker_header_icon].join(" ")}
            onClick={handleLeft}
          >
            <Left />
          </span>
        </div>
        <div className={[Style.n_picker_header_text].join(" ")}>
          <span>
            {currentTime.year}年 {currentTime.month}月
          </span>
        </div>
        <div className={[Style.n_picker_header_right].join(" ")}>
          <span
            className={[Style.n_picker_header_icon].join(" ")}
            onClick={handleRight}
          >
            <Right />
          </span>
          <span
            className={[Style.n_picker_header_icon].join(" ")}
            onClick={handleDoubleRight}
          >
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
                {picker === "week" ? <th key={"week"}></th> : null}
                {weekList.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            {/* tbody */}
            {day.length && (
              <tbody onClick={handleClickTbody} ref={tobdyRef}>
                {day.length &&
                  [0, 1, 2, 3, 4, 5].map((item) => (
                    <tr
                      key={item}
                      className={[
                        picker === "week" ? Style.n_picker_tr_week : "",
                        picker === "week" &&
                        weekIndex === item &&
                        currentTime.year === weekTime.year &&
                        currentTime.month === weekTime.month
                          ? Style.n_picker_tr_active
                          : "",
                      ].join(" ")}
                      date-week={weekNum[item]}
                    >
                      {picker === "week" && weekNum.length ? (
                        <td
                          key={`week${weekNum[item]}`}
                          className={[Style.n_picker_cell].join(" ")}
                        >
                          {weekNum[item] || ""}
                        </td>
                      ) : null}
                      {day.length &&
                        [0, 1, 2, 3, 4, 5, 6].map((it) => {
                          return (
                            <td
                              className={[
                                Style.n_picker_cell,
                                `${
                                  item * 7 + it > firstIndex &&
                                  item * 7 + it <= lastIndex
                                    ? Style.n_picker_cell_in_view
                                    : ""
                                }`,
                              ].join(" ")}
                              key={day[item * 7 + it]}
                            >
                              <div
                                className={[
                                  Style.n_picker_cell_inner,
                                  `${
                                    currentTime.year === nowTime.year &&
                                    currentTime.month === nowTime.month &&
                                    day[item * 7 + it] === nowTime.date &&
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it < lastIndex
                                      ? Style.n_picker_cell_in_today
                                      : ""
                                  }`,
                                  `${
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it <= lastIndex &&
                                    currentTime.year ===
                                      Number(selectDateArr[0]) &&
                                    currentTime.month ===
                                      Number(selectDateArr[1]) &&
                                    Number(selectDateArr[2]) ===
                                      day[item * 7 + it]
                                      ? Style.n_picker_cell_active
                                      : ""
                                  }`,
                                ].join(" ")}
                                title={
                                  `${
                                    item * 7 + it <= firstIndex
                                      ? `${preTime.year}-${
                                          preTime.month > 9
                                            ? preTime.month
                                            : "0" + preTime.month
                                        }-${
                                          day[item * 7 + it] > 9
                                            ? day[item * 7 + it]
                                            : "0" + day[item * 7 + it]
                                        }`
                                      : ""
                                  }` +
                                  `${
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it <= lastIndex
                                      ? `${currentTime.year}-${
                                          currentTime.month > 9
                                            ? currentTime.month
                                            : "0" + currentTime.month
                                        }-${
                                          day[item * 7 + it] > 9
                                            ? day[item * 7 + it]
                                            : "0" + day[item * 7 + it]
                                        }`
                                      : ""
                                  }` +
                                  `${
                                    item * 7 + it > lastIndex
                                      ? `${lastTime.year}-${
                                          lastTime.month > 9
                                            ? lastTime.month
                                            : "0" + lastTime.month
                                        }-${
                                          day[item * 7 + it] > 9
                                            ? day[item * 7 + it]
                                            : "0" + day[item * 7 + it]
                                        }`
                                      : ""
                                  }`
                                }
                              >
                                {day[item * 7 + it]}
                              </div>
                            </td>
                          );
                        })}
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
