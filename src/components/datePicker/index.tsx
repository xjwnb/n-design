/*
 * @Author: your name
 * @Date: 2021-12-03 15:13:35
 * @LastEditTime: 2021-12-18 11:23:23
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
// icon
import {
  Calendar,
  DoubleLeft,
  Left,
  Right,
  DoubleRight,
  SwapRight,
} from "../../Icons/icon/index";
import "./index.scss";
import classnames from "classnames";

const weekList = ["一", "二", "三", "四", "五", "六", "日"];

const placeholderText = {
  date: "请选择日期",
  week: "请选择周",
  month: "请选择月份",
  year: "请选择年份",
  quarter: "请选择季度",
};

const monthList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const Panel = memo(PickerPanel);

interface IProps {
  picker?: "date" | "week" | "month" | "year" | "quarter";

  onChange?: (val: string) => void;
}

function DatePicker(Props: IProps) {
  const { picker = "date", onChange } = Props;

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
  const [pickerValue, setpickerValue] = useState(picker);

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
      if (parent && parent.parentElement) {
        parent = parent.parentElement;
      } else {
        return false;
      }
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
  const handleSelectDate = function (
    value: string,
    type: "pre" | "current" | "next" = "current"
  ) {
    setdateValue(value);
    onChange && onChange(value);
    setshowPanel(false);
    switch (type) {
      case "pre":
        handleLeft();
        break;
      case "next":
        handleRight();
        break;
      default:
        break;
    }
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

  /**
   * 修改 picker 值
   */
  const handleChangePicker = function (
    pickerVal: "date" | "week" | "month" | "year" | "quarter"
  ) {
    setpickerValue(pickerVal);
    setshowPanel(true);
  };

  /**
   * 修改 currentTime.year 值
   */
  const handleChangeCurrentYear = function (
    newYear: number,
    callback?: Function
  ) {
    setcurrentTime({
      year: newYear,
      month: currentTime.month,
      date: currentTime.date,
    });
    // setpickerValue("month");
    callback && callback();
  };

  /**
   * 修改 currentTime.month 值
   */
  const handleChangeCurrentMonth = function (month: number) {
    setcurrentTime({
      year: currentTime.year,
      month,
      date: currentTime.date,
    });
    handleChangePicker("date");
  };

  return (
    <div className={classnames("n_datePicker")} ref={datePickerRef}>
      <Input
        suffix={<Calendar color="#BFBFBF" />}
        readOnly={true}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        value={dateValue}
        onChange={handleInputChange}
        placeholder={placeholderText[picker]}
      />

      <div
        className={classnames("n_datePicker_panel_container")}
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
            onChangePicker: handleChangePicker,
            onChangeCurrentYear: handleChangeCurrentYear,
            onChangeCurrentMonth: handleChangeCurrentMonth,
          }}
          picker={pickerValue}
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
  rangeTime?: string[];
  range?: boolean;
  rangeIndex?: number; // 0 | 1;
  hiddenLeftControl?: boolean;
  hiddenRightControl?: boolean;

  onSelectDate: Function;
  onControl?: {
    onLeft?: Function;
    onRight?: Function;
    onDoubleLeft?: Function;
    onDoubleRight?: Function;
    onChangePicker?: Function;
    onChangeCurrentYear?: Function;
    onChangeCurrentMonth?: Function;
    onSetStartTime?: Function;
    onSetEndTime?: Function;
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
    rangeTime,
    range = false,
    rangeIndex = 0,
    hiddenLeftControl = false,
    hiddenRightControl = false,
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
  // month value
  const [monthValue, setmonthValue] = useState<Array<string | number>>([]);
  // year 数组
  const [yearList, setyearList] = useState<Array<number>>([]);
  const [initPicker, setinitPicker] = useState("");
  // title 数组
  const [titleArr, settitleArr] = useState<Array<string>>([]);
  const [dayType, setdayType] = useState<string[]>([]);

  const tobdyRef = useRef<any>(null);

  useEffect(() => {
    setinitPicker(picker);
    // eslint-disable-next-line
  }, []);

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
    if (!currentTime.year) return;
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
  }, [currentTime, day]);

  useEffect(() => {
    initYearList();
    // eslint-disable-next-line
  }, [currentTime]);

  useEffect(() => {
    getTitleList();
    // eslint-disable-next-line
  }, [day, currentTime]);

  useEffect(() => {
    if (titleArr.length && range) {
      if (rangeIndex === 0) {
        let typeArr = titleArr.map((item, index) => {
          if (rangeTime && rangeTime[1]) {
            if (
              new Date(item).getTime() - new Date(rangeTime[0]).getTime() > 0 &&
              new Date(item).getTime() - new Date(rangeTime[1]).getTime() < 0
            ) {
              return "range";
            } else if (
              new Date(item).getTime() - new Date(rangeTime[1]).getTime() <
              0
            ) {
              return "none";
            } else if (
              new Date(item).getTime() - new Date(rangeTime[1]).getTime() >
              0
            ) {
              return "disable";
            } else {
              return "active";
            }
          } else {
            return "none";
          }
        });
        setdayType(typeArr);
      } else {
        let typeArr = titleArr.map((item, index) => {
          if (rangeTime && rangeTime[0]) {
            if (
              new Date(item).getTime() - new Date(rangeTime[0]).getTime() <
              0
            ) {
              return "disable";
            } else if (
              new Date(item).getTime() - new Date(rangeTime[0]).getTime() > 0 &&
              new Date(item).getTime() - new Date(rangeTime[1]).getTime() < 0
            ) {
              return "range";
            } else {
              return "none";
            }
          } else {
            return "none";
          }
        });
        setdayType(typeArr);
      }
    }
  }, [rangeIndex, currentTime, range, rangeTime, titleArr]);

  /**
   * 获取 title list
   */
  const getTitleList = function () {
    if (day.length) {
      let titleList = day.map((item, index) => {
        if (index <= firstIndex) {
          if (preTime.year) {
            return `${`${preTime.year}-${
              preTime.month > 9 ? preTime.month : "0" + preTime.month
            }-${day[index] > 9 ? day[index] : "0" + day[index]}`}`;
          } else {
            let preMonth = Number(currentTime.month) - 1;
            preMonth = preMonth === 0 ? 12 : preMonth;
            let preYear =
              currentTime.month > 1
                ? currentTime.year
                : Number(currentTime.year) - 1;
            return `${preYear}-${preMonth > 9 ? preMonth : "0" + preMonth}-${
              day[index] > 9 ? day[index] : "0" + day[index]
            }`;
          }
        } else if (index > lastIndex) {
          if (lastTime.year) {
            return `${`${lastTime.year}-${
              lastTime.month > 9 ? lastTime.month : "0" + lastTime.month
            }-${day[index] > 9 ? day[index] : "0" + day[index]}`}`;
          } else {
            let lastMonth = Number(currentTime.month) + 1;
            lastMonth = lastMonth > 12 ? 1 : lastMonth;
            let lastYear =
              currentTime.month === 12
                ? Number(currentTime.year) + 1
                : currentTime.year;
            return `${lastYear}-${
              lastMonth > 9 ? lastMonth : "0" + lastMonth
            }-${day[index] > 9 ? day[index] : "0" + day[index]}`;
          }
        } else {
          return `${`${currentTime.year}-${
            currentTime.month > 9 ? currentTime.month : "0" + currentTime.month
          }-${day[index] > 9 ? day[index] : "0" + day[index]}`}`;
        }
      });
      settitleArr(titleList);
    }
  };

  /**
   * 初始化 year list
   */
  const initYearList = function (year: number | string = currentTime.year) {
    if (typeof currentTime.year === "number") {
      let firstYear = Math.floor(Number(year) / 10) * 10;
      let yearArr = [];
      for (let i = 0; i <= 10; i++) {
        yearArr.push(firstYear + i);
      }
      yearArr.unshift(firstYear - 1);
      setyearList(yearArr);
    }
  };

  /**
   * 点击事件 tbody
   */
  const handleClickTbody = function (e: BaseSyntheticEvent) {
    if (range && e.target.title) {
      if (rangeIndex === 0) {
        onControl?.onSetStartTime && onControl.onSetStartTime(e.target.title);
        return;
      }
      if (rangeTime && !rangeTime[0]) {
        onControl?.onSetStartTime && onControl.onSetStartTime(e.target.title);
      } else {
        onControl?.onSetEndTime && onControl.onSetEndTime(e.target.title);
      }

      return;
    }
    if (e.target.title && picker === "date") {
      let currentIndex = e.target.getAttribute("data-index");
      if (currentIndex <= firstIndex) {
        onSelectDate(e.target.title, "pre");
      } else if (currentIndex >= lastIndex) {
        onSelectDate(e.target.title, "next");
      } else {
        onSelectDate(e.target.title);
      }
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
        let selectDayIndex = currentSelectIndex * 7;
        let selectYear = Number(currentTime.year);
        if (selectDayIndex <= firstIndex && currentTime.month === 1) {
          selectYear = Number(currentTime.year) - 1;
          /* onControl?.onChangeCurrentYear &&
            onControl.onChangeCurrentYear(Number(currentTime.year) - 1);
          onControl?.onChangeCurrentMonth && onControl.onChangeCurrentMonth(12);
          onControl?.onChangePicker && onControl.onChangePicker("month"); */
        } else if (selectDayIndex > lastIndex && currentTime.month === 12) {
          selectYear = Number(currentTime.year) + 1;
          /* onControl?.onChangeCurrentYear &&
            onControl.onChangeCurrentYear(Number(currentTime.year) + 1);
          onControl?.onChangeCurrentMonth && onControl.onChangeCurrentMonth(1);
          onControl?.onChangePicker && onControl.onChangePicker("month"); */
        } else {
          selectYear = Number(currentTime.year);
        }

        setweekTime({
          year: selectYear,
          month: currentTime.month,
        });
        setweekIndex(weekNum[currentSelectIndex]);

        onSelectDate(`${selectYear}-${weekNum[currentSelectIndex]}周`);
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
    if (picker !== "year") {
      onControl?.onDoubleLeft && onControl.onDoubleLeft();
    } else {
      initYearList(Number(yearList[1]) - 10);
    }
  };

  /**
   * doubleRight icon click
   */
  const handleDoubleRight = function () {
    if (picker !== "year") {
      onControl?.onDoubleRight && onControl.onDoubleRight();
    } else {
      initYearList(Number(yearList[1]) + 10);
    }
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

  /**
   * 点击选中月份
   */
  const handleSelectMonth = function (month: string) {
    if (["month", "year"].includes(initPicker)) {
      let nowMonth = Number(month);
      let value = [currentTime.year, nowMonth];
      onSelectDate(
        `${currentTime.year}-${nowMonth > 9 ? nowMonth : "0" + nowMonth}`
      );
      setmonthValue(value);
    } else if (["week"].includes(initPicker)) {
      onControl?.onChangeCurrentMonth &&
        onControl.onChangeCurrentMonth(Number(month));
      onControl?.onChangePicker && onControl.onChangePicker("week");
    } else {
      onControl?.onChangeCurrentMonth &&
        onControl.onChangeCurrentMonth(Number(month));
    }
  };

  /**
   * 点击当前年份
   */
  const handleClickCurrentYear = function () {
    initYearList();
    onControl?.onChangePicker && onControl.onChangePicker("year");
  };

  /**
   * 点击当前月份
   */
  const handleClickCurrentMonth = function () {
    onControl?.onChangePicker && onControl.onChangePicker("month");
  };

  /**
   * 点击选中年份
   */
  const handleSelectYear = function (yearVal: number) {
    const callback = function () {
      if (["month", "date", "week"].includes(initPicker)) {
        onControl?.onChangePicker && onControl.onChangePicker("month");
      } else if (initPicker === "year") {
        onSelectDate(`${yearVal}`);
      }
    };
    onControl?.onChangeCurrentYear &&
      onControl.onChangeCurrentYear(yearVal, callback);
  };

  return (
    <div
      className={classnames("n_picker_panel")}
      style={{
        minWidth: 280,
      }}
    >
      {/* header */}
      <div className={classnames("n_picker_header")}>
        <div className={classnames("n_picker_header_left")}>
          {!hiddenLeftControl && (
            <span
              className={classnames("n_picker_header_icon")}
              onClick={handleDoubleLeft}
            >
              <DoubleLeft />
            </span>
          )}
          {["date", "week"].includes(picker) && !hiddenLeftControl && (
            <span
              className={classnames("n_picker_header_icon")}
              onClick={handleLeft}
            >
              <Left />
            </span>
          )}
        </div>
        <div className={classnames("n_picker_header_text")}>
          {/* picker === "date" | "week" */}
          {["date", "week"].includes(picker) && (
            <span>
              <span
                className={classnames("n_picker_month_text")}
                onClick={handleClickCurrentYear}
              >
                {currentTime.year}年
              </span>{" "}
              <span
                className={classnames("n_picker_month_text")}
                onClick={handleClickCurrentMonth}
              >
                {currentTime.month}月
              </span>
            </span>
          )}
          {picker === "month" && (
            <span
              className={classnames("n_picker_month_text")}
              onClick={handleClickCurrentYear}
            >
              {currentTime.year}年
            </span>
          )}
          {picker === "year" && (
            <span>
              {yearList[1]} ~ {yearList[10]}
            </span>
          )}
        </div>
        <div className={classnames("n_picker_header_right")}>
          {["date", "week"].includes(picker) && !hiddenRightControl && (
            <span
              className={classnames("n_picker_header_icon")}
              onClick={handleRight}
            >
              <Right />
            </span>
          )}
          {!hiddenRightControl && (
            <span
              className={classnames("n_picker_header_icon")}
              onClick={handleDoubleRight}
            >
              <DoubleRight />
            </span>
          )}
        </div>
      </div>

      {/* body */}
      <div className={classnames("n_picker_body")}>
        {day.length && ["date", "week"].includes(picker) && (
          <table className={classnames("n_picker_content")}>
            <thead>
              <tr>
                {picker === "week" ? <th key={"week"}></th> : null}
                {weekList.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            {/* tbody */}
            {/* picker === "date" | "week" */}
            {day.length && (
              <tbody onClick={handleClickTbody} ref={tobdyRef}>
                {day.length &&
                  [0, 1, 2, 3, 4, 5].map((item) => (
                    <tr
                      key={item}
                      className={classnames(
                        picker === "week" ? "n_picker_tr_week" : "",
                        picker === "week" &&
                          weekIndex === weekNum[item] &&
                          currentTime.year === weekTime.year &&
                          currentTime.month === weekTime.month
                          ? "n_picker_tr_active"
                          : ""
                      )}
                      date-week={weekNum[item]}
                    >
                      {picker === "week" && weekNum.length ? (
                        <td
                          key={`week${weekNum[item]}`}
                          className={classnames("n_picker_cell")}
                        >
                          {weekNum[item] || ""}
                        </td>
                      ) : null}
                      {day.length &&
                        [0, 1, 2, 3, 4, 5, 6].map((it) => {
                          return (
                            <td
                              className={classnames(
                                "n_picker_cell",
                                `${
                                  item * 7 + it > firstIndex &&
                                  item * 7 + it <= lastIndex
                                    ? "n_picker_cell_in_view"
                                    : ""
                                }`,
                                `${
                                  range && dayType[item * 7 + it] === "disable"
                                    ? "n_picker_cell_in_disable"
                                    : ""
                                }`,
                                `${
                                  range && dayType[item * 7 + it] === "range"
                                    ? "n_picker_cell_in_range"
                                    : ""
                                }`
                              )}
                              key={day[item * 7 + it]}
                            >
                              <div
                                className={classnames(
                                  "n_picker_cell_inner",
                                  `${
                                    currentTime.year === nowTime.year &&
                                    currentTime.month === nowTime.month &&
                                    day[item * 7 + it] === nowTime.date &&
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it < lastIndex
                                      ? "n_picker_cell_in_today"
                                      : ""
                                  }`,
                                  `${
                                    !range &&
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it <= lastIndex &&
                                    currentTime.year ===
                                      Number(selectDateArr[0]) &&
                                    currentTime.month ===
                                      Number(selectDateArr[1]) &&
                                    Number(selectDateArr[2]) ===
                                      day[item * 7 + it]
                                      ? "n_picker_cell_active"
                                      : ""
                                  }`,
                                  `${
                                    range &&
                                    rangeTime &&
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it <= lastIndex &&
                                    currentTime.year ===
                                      Number(rangeTime[0].split("-")[0]) &&
                                    currentTime.month ===
                                      Number(rangeTime[0].split("-")[1]) &&
                                    Number(rangeTime[0].split("-")[2]) ===
                                      day[item * 7 + it]
                                      ? "n_picker_cell_active"
                                      : ""
                                  }`,
                                  `${
                                    range &&
                                    rangeTime &&
                                    item * 7 + it > firstIndex &&
                                    item * 7 + it <= lastIndex &&
                                    currentTime.year ===
                                      Number(rangeTime[1].split("-")[0]) &&
                                    currentTime.month ===
                                      Number(rangeTime[1].split("-")[1]) &&
                                    Number(rangeTime[1].split("-")[2]) ===
                                      day[item * 7 + it]
                                      ? "n_picker_cell_active"
                                      : ""
                                  }`
                                )}
                                data-index={item * 7 + it}
                                title={titleArr[item * 7 + it]}
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

        {/* picker === "month" */}
        {picker === "month" && (
          <div className={classnames("n_picker_month")}>
            {monthList.map((item) => (
              <div key={item} className={classnames("n_picker_month_item")}>
                <div
                  onClick={() => handleSelectMonth(item)}
                  className={classnames(
                    "n_picker_month_inner",
                    currentTime.year === monthValue[0] &&
                      item === String(monthValue[1])
                      ? "n_picker_month_inner_active"
                      : ""
                  )}
                >
                  {item}月
                </div>
              </div>
            ))}
          </div>
        )}

        {picker === "year" && (
          <div className={classnames("n_picker_year")}>
            {yearList.map((item) => (
              <div key={item} className={classnames("n_picker_year_item")}>
                <div
                  className={classnames(
                    "n_picker_year_inner",
                    currentTime.year === item
                      ? "n_picker_year_inner_active"
                      : ""
                  )}
                  onClick={() => handleSelectYear(item)}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * RangePicker
 */
interface RangeProps {
  onChange?: Function;
}

function RangePicker(Props: RangeProps) {
  const { onChange } = Props;

  const [barWidth, setbarWidth] = useState<number>(0);

  const [showBar, setshowBar] = useState(false);
  const [barIndex, setbarIndex] = useState(0);
  const [showBorder, setshowBorder] = useState<boolean>(false);
  const [showShadow, setshowShadow] = useState<boolean>(false);
  const [inputFocus, setinputFocus] = useState<boolean>(false);
  // currentTime
  const [currentTime, setcurrentTime] = useState<{
    year: string | number;
    month: string | number;
    date: string | number;
  }>({
    year: "",
    month: "",
    date: "",
  });
  // nextTime
  const [nextTime, setnextTime] = useState<{
    year: string | number;
    month: string | number;
    date: string | number;
  }>({
    year: "",
    month: "",
    date: "",
  });
  // nowTime
  const [nowTime, setnowTime] = useState<{
    year: string | number;
    month: string | number;
    date: string | number;
  }>({
    year: "",
    month: "",
    date: "",
  });
  // picker - container
  const [showRangePanel, setshowRangePanel] = useState(false);
  // one picker
  const [oneDateValue, setoneDateValue] = useState("");
  const [oneFirstIndex, setoneFirstIndex] = useState(0);
  const [oneLastIndex, setoneLastIndex] = useState(0);
  const [oneDayList, setoneDayList] = useState<Array<number>>([]);
  // two picker
  const [twoDateValue, settwoDateValue] = useState("");
  const [twoFirstIndex, settwoFirstIndex] = useState(0);
  const [twoLastIndex, settwoLastIndex] = useState(0);
  const [twoDayList, settwoDayList] = useState<Array<number>>([]);

  // ref
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const rangePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * 点击触发事件
     */
    const handleBodyClick = function (e: any) {
      let flag = handleClickEle(e.target, rangePickerRef.current);
      if (!flag) {
        setshowRangePanel(false);
        setshowBar(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

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
      let nextObj = getTimeObj(1);
      setnextTime({
        year: nextObj.year,
        month: nextObj.month,
        date: new Date().getDate(),
      });
    }
    // eslint-disable-next-line
  }, [currentTime]);

  useEffect(() => {
    if (startInputRef.current !== null) {
      setbarWidth(startInputRef.current?.offsetWidth);
    }
  }, [showBar, barIndex]);

  useEffect(() => {
    if (currentTime.year) {
      FullMonthDateList(
        {
          year: Number(currentTime.year),
          month: Number(currentTime.month),
        },
        "one"
      );
      FullMonthDateList(
        {
          year: Number(currentTime.year),
          month: Number(currentTime.month),
        },
        "two"
      );
    }
    // eslint-disable-next-line
  }, [currentTime]);

  useEffect(() => {
    const inputContainer = inputContainerRef.current;
    inputContainer?.addEventListener("mouseenter", () => {
      setshowBorder(true);
    });
    inputContainer?.addEventListener("mouseleave", () => {
      inputFocus ? setshowBorder(true) : setshowBorder(false);
    });
    // startInputRef.current?.addEventListener("focus", () => {
    //   setinputFocus(true);
    //   setshowBorder(true);
    //   setshowShadow(true);
    //   setshowRangePanel(true);
    // });
    // startInputRef.current?.addEventListener("blur", () => {
    //   setinputFocus(false);
    //   setshowBorder(false);
    //   setshowShadow(false);
    //   setshowBar(false);
    //   // setshowRangePanel(false);
    // });

    // endInputRef.current?.addEventListener("focus", () => {
    //   setinputFocus(true);
    //   setshowBorder(true);
    //   setshowShadow(true);
    //   setshowRangePanel(true);
    // });
    // endInputRef.current?.addEventListener("blur", () => {
    //   setinputFocus(false);
    //   setshowBorder(false);
    //   setshowShadow(false);
    //   setshowBar(false);
    //   // setshowRangePanel(false);
    // });
  }, [inputFocus]);

  useEffect(() => {
    showRangePanel && setshowBorder(true);
    showRangePanel && inputFocus ? setshowBorder(true) : setshowBorder(false);
    if (showRangePanel) {
      setinputFocus(true);
      setshowBorder(true);
      setshowShadow(true);
    } else {
      setinputFocus(false);
      setshowBorder(false);
      setshowShadow(false);
    }
    // eslint-disable-next-line
  }, [showRangePanel]);

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
      if (parent && parent.parentElement) {
        parent = parent.parentElement;
      } else {
        return false;
      }
    }
  };

  /**
   * 开始输入框 - focus
   */
  const handleStartInputFocus = function () {
    setbarIndex(0);
    setshowBar(true);
    setshowRangePanel(true);
  };

  /**
   * 结束输入框 - focus
   */
  const handleEndInputFocus = function () {
    setbarIndex(1);
    setshowBar(true);
    setshowRangePanel(true);
  };

  /**
   * 开始输入框 - blur
   */
  const handleStartInputBlur = function () {};

  /**
   * 结束输入框 - blur
   */
  const handleEndInputBlur = function () {};

  /**
   * 获取前一个月后一个月 => { year: "", month: "" }
   */
  const getTimeObj = function (type: 1 | -1) {
    const result: { year: string | number; month: string | number } = {
      year: "",
      month: "",
    };
    switch (type) {
      case -1:
        let preMonth = Number(currentTime.month) - 1;
        result.month = preMonth = preMonth === 0 ? 12 : preMonth;
        result.year =
          currentTime.month > 1
            ? currentTime.year
            : Number(currentTime.year) - 1;
        break;
      case 1:
        let lastMonth = Number(currentTime.month) + 1;
        result.month = lastMonth > 12 ? 1 : lastMonth;
        result.year =
          currentTime.month === 12
            ? Number(currentTime.year) + 1
            : currentTime.year;
        break;
    }
    return result;
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
  const FullMonthDateList = function (
    current: {
      year: number;
      month: number;
    },
    type?: "one" | "two"
  ) {
    const dayList: number[] = [];

    // 本月一号星期几
    if (type === "one") {
      let firstDay = getDateDay(current.year, current.month, 1);
      setoneFirstIndex(firstDay - 2);

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
      setoneLastIndex(dayList.length - 1);

      if (otherDay) {
        for (let i = 1; i <= otherDay; i++) {
          dayList.push(i);
        }
      }
      setoneDayList(dayList);
    } else {
      let twoTime = getTimeObj(1);
      let firstDay = getDateDay(twoTime.year, twoTime.month, 1);
      settwoFirstIndex(firstDay - 2);

      // 本月最后一天是几号
      let lastDate = new Date(
        Number(twoTime.year),
        Number(twoTime.month),
        0
      ).getDate();

      /**
       * 上一个月最后一天是几号
       */
      let lastMonthLastDate = new Date(
        Number(twoTime.year),
        Number(twoTime.month) - 1,
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
      settwoLastIndex(dayList.length - 1);

      if (otherDay) {
        for (let i = 1; i <= otherDay; i++) {
          dayList.push(i);
        }
      }
      settwoDayList(dayList);
    }
  };

  /**
   * 点击选中当前日期 - 开始日历
   */
  const handleOneSelectDate = function (value: string) {
    // console.log("one value");
    // console.log(value);
    // setoneDateValue(value);
  };

  /**
   * 点击选中当前日期 - 结束日历
   */
  const handleTwoSelectDate = function (value: string) {
    // console.log("two value");
    // console.log(value);
    // settwoDateValue(value);
  };

  /**
   * 开始输入框 - change
   */
  const handleStartInputChange = function () {
    setoneDateValue("");
  };

  /**
   * 结束输入框 - change
   */
  const handleEndInputChange = function () {
    settwoDateValue("");
  };

  /**
   * 设置开始日期
   */
  const handleSetStartTime = function (value: string) {
    setbarIndex(1);
    setoneDateValue(value);
  };

  /**
   * 设置结束日期
   */
  const handleSetEndTime = function (value: string) {
    setbarIndex(1);
    settwoDateValue(value);
    setshowRangePanel(false);
    setshowBar(false);
    onChange &&
      onChange(
        [new Date(oneDateValue), new Date(value)],
        [oneDateValue, value]
      );
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
    <div className={classnames("n_rangepicker")} ref={rangePickerRef}>
      <div className={classnames("n_rangepicker_container")}>
        {/* Input */}
        <div
          className={classnames("n_rangepicker_input")}
          ref={inputContainerRef}
          style={{
            borderColor: showBorder ? "#1890ff" : "#D9D9D9",
            boxShadow: showShadow ? "0 0 3px #40a9ff" : "none",
          }}
        >
          {/* startTime */}
          <input
            placeholder="开始日期"
            ref={startInputRef}
            readOnly={true}
            onFocus={handleStartInputFocus}
            onBlur={handleStartInputBlur}
            onChange={handleStartInputChange}
            value={oneDateValue}
          />
          {/* middle icon */}
          <span className={classnames("n_rangepicker_icon")}>
            <SwapRight color="#BFBFBF" />
          </span>
          {/* endTime */}
          <input
            placeholder="结束日期"
            ref={endInputRef}
            readOnly={true}
            onFocus={handleEndInputFocus}
            onBlur={handleEndInputBlur}
            onChange={handleEndInputChange}
            value={twoDateValue}
          />
          {/* icon */}
          <span className={classnames("n_rangepicker_icon")}>
            <Calendar color="#BFBFBF" />
          </span>

          {/* active_bar */}
          <div
            className={classnames("n_rangepicker_bar")}
            style={{
              width: barWidth,
              opacity: showBar ? 1 : 0,
              left: barIndex === 1 ? barWidth + 25 : -8,
            }}
          ></div>
        </div>
      </div>

      {/* picker container */}
      <div
        className={classnames("n_datePicker_panel_container")}
        style={{
          display: showRangePanel ? "block" : "none",
        }}
      >
        {/* One Panel */}
        <Panel
          day={oneDayList}
          firstIndex={oneFirstIndex}
          lastIndex={oneLastIndex}
          currentTime={currentTime}
          nowTime={nowTime}
          onSelectDate={handleOneSelectDate}
          selectTime={oneDateValue}
          picker="date"
          rangeTime={[oneDateValue, twoDateValue]}
          range={true}
          rangeIndex={barIndex}
          hiddenRightControl={true}
          onControl={{
            onSetStartTime: handleSetStartTime,
            onSetEndTime: handleSetEndTime,
            onLeft: handleLeft,
            onDoubleLeft: handleDoubleLeft,
          }}
        />
        {/* Two Panel */}
        <Panel
          day={twoDayList}
          firstIndex={twoFirstIndex}
          lastIndex={twoLastIndex}
          currentTime={nextTime}
          nowTime={nowTime}
          onSelectDate={handleTwoSelectDate}
          selectTime={twoDateValue}
          picker="date"
          rangeTime={[oneDateValue, twoDateValue]}
          range={true}
          rangeIndex={barIndex}
          hiddenLeftControl={true}
          onControl={{
            onSetStartTime: handleSetStartTime,
            onSetEndTime: handleSetEndTime,
            onRight: handleRight,
            onDoubleRight: handleDoubleRight,
          }}
        />
      </div>
    </div>
  );
}

DatePicker.RangePicker = RangePicker;

export default DatePicker;
