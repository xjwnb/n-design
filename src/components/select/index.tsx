/*
 * @Author: your name
 * @Date: 2021-11-02 10:44:07
 * @LastEditTime: 2021-11-05 08:41:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\select\index.tsx
 */
import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  BaseSyntheticEvent,
} from "react";
// import Style from "./index.module.scss";
import "./index.scss";
import { Bottom, Closefill, Search } from "../../Icons/icon/index";

interface optionContextInterface {
  value?: string;
  inputVal: string;
  showSearch: boolean;
  changeValue: Function;
}

const defaultOptionsContext: optionContextInterface = {
  value: "",
  inputVal: "",
  showSearch: false,
  changeValue: function (value: string, children: string) {
    console.log(value, children);
  },
};

const OptionsContext = createContext(defaultOptionsContext);

interface IProps {
  children: any;
  placeholder?: string;
  style?: object;
  defaultValue?: string;
  disabled?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  onChange?: Function;
}

function Select(Props: IProps) {
  const {
    placeholder = "",
    style,
    children,
    defaultValue = "",
    disabled = false,
    allowClear = false,
    showSearch = false,
    onChange,
  } = Props;

  const [isShowOptions, setisShowOptions] = useState<boolean>(false);
  const [isShowBorder, setisShowBorder] = useState<boolean>(false);
  const [clickTarget, setclickTarget] = useState<
    HTMLDivElement | EventTarget | null
  >(null);
  const [value, setvalue] = useState(defaultValue);
  const [inputVal, setinputVal] = useState<string>("");
  const [isShowClear, setisShowClear] = useState(false);
  const [isShowSearch, setisShowSearch] = useState<boolean>(false);
  const [placeholderValue, setplaceholderValue] = useState(placeholder);
  const [copyInputValue, setcopyInputValue] = useState(inputVal);

  const inputContainer = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsContainer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // const selectIconRef = useRef<HTMLDivElement>(null);

  const changeValue = function (value: string, children: string) {
    // console.log("select", value, children);
    setvalue(value);
    setisShowOptions(false);
    setinputVal(children);
  };

  useEffect(() => {
    inputContainer.current?.addEventListener("mouseover", () => {
      setisShowBorder(true);
    });
    inputContainer.current?.addEventListener("mouseleave", () => {
      setisShowBorder(false);
      setisShowClear(false);
    });
  }, [inputContainer]);

  useEffect(() => {
    if (inputVal !== "" && allowClear && isShowBorder) {
      setisShowClear(true);
    }

    if (inputVal === "" && allowClear) {
      setisShowClear(false);
    }
  }, [inputVal, allowClear, isShowBorder]);

  /**
   * 点击选择器
   */
  const handleClickSelect = function () {
    if (disabled) return;
    setisShowOptions(!isShowOptions);
  };

  // useCallback(() => {
  //   isParentEle(clickTarget, selectRef.current);
  // }, [clickTarget, isParentEle]);

  useEffect(() => {
    /**
     * 点击判断元素父元素
     */
    const isParentEle = function (
      targetEle: EventTarget | HTMLDivElement | PointerEvent | null,
      parentEle: HTMLDivElement | null
    ): any {
      if (!targetEle) return false;
      // targetEle
      if (targetEle === parentEle) return true;
      if (
        targetEle === document.body ||
        targetEle === document.documentElement
      ) {
        return false;
      }
      return isParentEle((targetEle as HTMLElement)?.parentNode, parentEle);
    };
    document.body.addEventListener("click", (e: MouseEvent) => {
      // console.log(e);
      setclickTarget(e.target);
      const flag = isParentEle(e.target, selectRef.current);
      // console.log(flag);
      if (!flag) {
        setisShowOptions(false);
        return;
      }
      // const isClickOptions =
      // isParentEle(e.target, optionsContainer.current);
      // console.log("isClickOptions", isClickOptions);
      // if (isClickOptions) {
      //   setisShowOptions()
      // }
    });
  }, [clickTarget]);

  useEffect(() => {
    onChange && onChange(value);
  }, [onChange, value, inputVal]);

  useEffect(() => {
    if (isShowOptions && showSearch) {
      setisShowSearch(true);
      // setcopyInputValue(inputVal);
      // setplaceholderValue(copyInputValue);
      // setinputVal("");
    } /* else if (!isShowOptions && showSearch) {
      setinputVal(copyInputValue);
      setplaceholderValue(placeholder);
    }  */ else {
      setisShowSearch(false);
      // setplaceholderValue(placeholder);
      // setinputVal(copyInputValue);
    }
  }, [isShowOptions, showSearch]);

  useEffect(() => {
    if (isShowOptions && showSearch) {
      console.log(inputVal);
      setcopyInputValue(inputVal);
      setplaceholderValue(inputVal);
      setinputVal("");
    } else if (!isShowOptions && !showSearch && copyInputValue) {
      setinputVal(copyInputValue);
      setplaceholderValue(placeholder);
    }
    // eslint-disable-next-line
  }, [isShowOptions]);

  /* useEffect(() => {
    if (isShowSearch && showSearch) {
      let inputValue = inputVal;
      setcopyInputValue(inputValue);
      setplaceholderValue(inputValue);
      setinputVal("");
    } else {
      setinputVal(copyInputValue);
      setplaceholderValue(placeholder);
    }
  }, [isShowSearch, showSearch]); */

  /*  useEffect(() => {
    if (showSearch) {
      if (isShowSearch) {
        let inputValue = inputVal;
        console.log(inputVal);
        setcopyInputValue(inputValue);
        setplaceholderValue(inputValue);
        setinputVal("");
      } else {
        setinputVal(copyInputValue);
        setplaceholderValue(placeholder);
      }
    }
  }, [showSearch, isShowSearch, inputVal, copyInputValue, placeholder]);
 */
  /**
   * 点击清空icon
   */
  const handleClickClearIcon = function () {
    setvalue("");
    setinputVal("");
    setisShowOptions(false);
  };

  /**
   * 输入框输入事件
   */
  const handleInputChange = function (e: BaseSyntheticEvent) {
    console.log(e);
    // console.log(inputRef.current?.value);
    setinputVal(inputRef.current?.value || "");
  };

  return (
    <div
      className={["n_select", `${disabled ? "n_select_disabled" : ""}`].join(
        " "
      )}
      style={{
        ...style,
      }}
      ref={selectRef}
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
          <input
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            placeholder={placeholderValue}
            readOnly={!showSearch ? true : false}
            ref={inputRef}
          />
        </span>
        <span className={"n_select_icon"}>
          {!isShowClear && !isShowSearch ? (
            <Bottom with={14} height={14} />
          ) : null}
          {isShowClear && (
            <Closefill width={14} height={14} onClick={handleClickClearIcon} />
          )}
          {isShowSearch && <Search width={14} height={14} />}
        </span>
      </div>

      {/* options */}
      {/* {isShowOptions && ( */}
      <OptionsContext.Provider
        value={{
          value,
          inputVal,
          showSearch,
          changeValue,
        }}
      >
        <div
          className={"n_select_options_container"}
          style={{
            display: isShowOptions ? "block" : "none",
          }}
          ref={optionsContainer}
        >
          {children}
        </div>
      </OptionsContext.Provider>
      {/* )} */}
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
  disabled?: boolean;
}

function Option(Props: optionProps) {
  const { children, value, disabled } = Props;

  const [isHidden, setisHidden] = useState<boolean>(false);

  const {
    changeValue,
    value: optionValue,
    inputVal,
    showSearch,
  } = useContext(OptionsContext);

  const handleClickOption = function () {
    if (disabled) return;
    changeValue(value, children);
  };

  useEffect(() => {
    if (optionValue === value) {
      changeValue(value, children);
    }
    // eslint-disable-next-line
  }, [optionValue, value]);

  useEffect(() => {
    if (!showSearch) {
      setisHidden(true);
    } else {
      const reg = new RegExp(inputVal, "gi");
      setisHidden(reg.test(children));
    }
    // console.log(reg.test(children), inputVal, children);
  }, [inputVal, children, showSearch]);

  return (
    <div
      className={[
        "n_select_option",
        `${optionValue === value ? "n_select_option_active" : ""}`,
        `${disabled ? "n_select_option_disabled" : ""}`,
      ].join(" ")}
      onClick={handleClickOption}
      style={{
        display: !isHidden ? "none" : "block",
      }}
    >
      {children}
    </div>
  );
}

Select.Option = Option;

export default Select;
