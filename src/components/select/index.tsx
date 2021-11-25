import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  BaseSyntheticEvent,
} from "react";
import "./index.scss";
import { Bottom, Closefill, Search, True } from "../../Icons/icon/index";

interface optionContextInterface {
  value?: string | string[];
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
  children: any[];
  placeholder?: string;
  style?: object;
  defaultValue?: string | string[];
  disabled?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  mode?: "multiple";
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
    mode = "",
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

  const changeValue = function (val: string, children: string) {
    if (mode === "multiple" && value instanceof Array) {
      let preVal = value;
      if (!value.includes(children)) {
        let nowVal: Array<string> = preVal.concat(children);
        setvalue(nowVal);
        setinputVal(nowVal.join(","));
      } else {
        setvalue(value.filter((item) => !item.includes(children)));
        setinputVal(value.filter((item) => !item.includes(children)).join(","));
      }
    } else if (!(value instanceof Array)) {
      setvalue(val);
    }
    !mode && setisShowOptions(false);
    mode !== "multiple" && setinputVal(children);
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

  useEffect(() => {
    /**
     * 点击判断元素父元素
     */
    const isParentEle = function (
      targetEle: EventTarget | HTMLDivElement | PointerEvent | null,
      parentEle: HTMLDivElement | null
    ): any {
      if (!targetEle) return false;
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
      setclickTarget(e.target);
      const flag = isParentEle(e.target, selectRef.current);
      if (!flag) {
        setisShowOptions(false);
        return;
      }
    });
  }, [clickTarget]);

  useEffect(() => {
    onChange && onChange(value);
  }, [onChange, value]);

  useEffect(() => {
    // 过滤出 option 的children
    if (mode !== "multiple") return;
    const childArr = children.filter((item) => item.type === Option);
    const propsChildrenArr = childArr.map((child) => child.props.children);
    const valueArr = [];
    if (value instanceof Array) {
      for (let i = 0; i < value.length; i++) {
        propsChildrenArr.includes(value[i]) && valueArr.push(value[i]);
      }
    }
    setvalue(valueArr);
    setinputVal(valueArr.join(","));
    // eslint-disable-next-line
  }, [children]);

  useEffect(() => {
    if (isShowOptions && showSearch) {
      setisShowSearch(true);
    } else {
      setisShowSearch(false);
    }
  }, [isShowOptions, showSearch]);

  useEffect(() => {
    if (isShowOptions && showSearch) {
      setcopyInputValue(inputVal);
      setplaceholderValue(inputVal);
      setinputVal("");
    } else if (!isShowOptions && !showSearch && copyInputValue) {
      setinputVal(copyInputValue);
      setplaceholderValue(placeholder);
    }
    // eslint-disable-next-line
  }, [isShowOptions]);

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
        `${
          optionValue === value || optionValue?.includes(children)
            ? "n_select_option_active"
            : ""
        }`,
        `${disabled ? "n_select_option_disabled" : ""}`,
      ].join(" ")}
      onClick={handleClickOption}
      style={{
        display: !isHidden ? "none" : "block",
      }}
    >
      <div className="n_select_option_inner">
        <span className="n_select_option_children">{children}</span>
        {/* <span className="n_select_option_icon">{children}</span> */}
        {optionValue?.includes(children) && (
          <span className="n_select_option_icon">
            <True width={14} height={14} />
          </span>
        )}
      </div>
    </div>
  );
}

Select.Option = Option;

export default Select;
