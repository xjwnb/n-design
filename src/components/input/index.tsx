import React, {
  useRef,
  useState,
  BaseSyntheticEvent,
  ReactElement,
  useEffect,
} from "react";
import {
  EyeOpen,
  EyeClose,
  Search as SearchIcon,
  Closefill,
  Loading,
} from "../../Icons/icon/index";
import { Button } from "../index";
import Style from "./index.module.scss";

type sizeValue = "large" | "middle" | "small";

interface IProps {
  placeholder?: string;
  value?: string;
  size?: sizeValue;
  prefix?: ReactElement;
  suffix?: ReactElement;
  maxLength?: number;
  style?: object;

  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
}

export default function Input(props: IProps) {
  const {
    placeholder,
    value,
    size,
    prefix,
    suffix,
    maxLength,
    style,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const [inputValue, setinputValue] = useState(value);
  const [showBorder, setshowBorder] = useState<boolean>(false);
  const [showShadow, setshowShadow] = useState<boolean>(false);
  const [inputFocus, setinputFocus] = useState<boolean>(false);

  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputContainer = inputContainerRef.current;
    inputContainer?.addEventListener("mouseenter", () => {
      setshowBorder(true);
    });
    inputContainer?.addEventListener("mouseleave", () => {
      inputFocus ? setshowBorder(true) : setshowBorder(false);
    });
    inputRef.current?.addEventListener("focus", () => {
      setinputFocus(true);
      setshowBorder(true);
      setshowShadow(true);
    });
    inputRef.current?.addEventListener("blur", () => {
      setinputFocus(false);
      setshowBorder(false);
      setshowShadow(false);
    });
  }, [inputFocus]);

  useEffect(() => {
    setinputValue(value);
  }, [value]);

  /**
   * input - change
   */
  const handleChange = function (event: BaseSyntheticEvent) {
    setinputValue(inputRef.current?.value);
    onChange && onChange(event);
  };

  /**
   * input - focus
   */
  const handleFocus = function (event: BaseSyntheticEvent) {
    onFocus && onFocus(event);
  };

  /**
   * input - blur
   */
  const handleBlur = function (event: BaseSyntheticEvent) {
    onBlur && onBlur(event);
  };

  return (
    <div
      className={Style.input_container}
      style={{
        ...style,
      }}
    >
      {!prefix && (
        <input
          placeholder={placeholder}
          className={[
            `${Style.n_input}`,
            `${size && size === "large" ? Style.n_input_lg : ""}`,
            `${size && size === "small" ? Style.n_input_sm : ""}`,
          ].join(" ")}
          value={inputValue}
          ref={inputRef}
          maxLength={maxLength}
          // style={{
          //   paddingLeft: prefix ? "30px" : "11px",
          // }}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
      )}
      {prefix && (
        <div
          className={Style.input_flex_content}
          ref={inputContainerRef}
          style={{
            borderColor: showBorder ? "#1890ff" : "#D9D9D9",
            boxShadow: showShadow ? "0 0 3px #40a9ff" : "none",
          }}
        >
          {prefix && <span className={Style.iconPrefix}>{prefix}</span>}
          {prefix && (
            <input
              placeholder={placeholder}
              value={inputValue}
              ref={inputRef}
              maxLength={maxLength}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          )}
          {suffix && <span className={Style.iconSuffix}>{suffix}</span>}
        </div>
      )}
    </div>
  );
}

// Input.Password
type typeValue = "password" | "text";

interface PwdProps {
  placeholder?: string;
  value?: string;
  style?: object;
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
}

/**
 * 密码框组件
 * @param pwdProps
 * @returns reactElement
 */
function Password(pwdProps: PwdProps) {
  const {
    placeholder,
    value = "",
    style,
    onChange,
    onBlur,
    onFocus,
  } = pwdProps;

  const [eye, seteye] = useState<boolean>(false);
  const [type, settype] = useState<typeValue>("password");
  const [pwdVal, setpwdVal] = useState(value);

  const pwdInputRef = useRef<HTMLInputElement>(null);

  const handleEyeClick = function () {
    seteye(!eye);
    type === "password" ? settype("text") : settype("password");
  };

  /**
   * onChange
   */
  const handlePwdChange = function (e: BaseSyntheticEvent) {
    setpwdVal(pwdInputRef.current?.value || "");
    onChange && onChange(e);
  };

  /**
   * onBlur
   */
  const handlePwdBlur = function (event: BaseSyntheticEvent) {
    onBlur && onBlur(event);
  };

  /**
   * onFocus
   */
  const handlePwdFocus = function (event: BaseSyntheticEvent) {
    onFocus && onFocus(event);
  };

  return (
    <div
      className={Style.n_input_password}
      style={{
        ...style,
      }}
    >
      <input
        className={[`${Style.n_input}`].join(" ")}
        type={type}
        placeholder={placeholder}
        value={pwdVal}
        ref={pwdInputRef}
        onChange={handlePwdChange}
        onBlur={handlePwdBlur}
        onFocus={handlePwdFocus}
      />
      {eye ? (
        <span className={Style.suffix_eye} onClick={handleEyeClick}>
          <EyeOpen />
        </span>
      ) : (
        <span className={Style.suffix_eye} onClick={handleEyeClick}>
          <EyeClose />
        </span>
      )}
    </div>
  );
}

Input.Password = Password;

// Input.Search

interface searchProps {
  placeholder?: string;
  width?: number;
  enterButton?: string | boolean;
  allowClear?: boolean;
  loading?: boolean;
  value?: string;
  style?: object;

  onSearch?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
}

function Search(searchProps: searchProps) {
  const {
    placeholder,
    width,
    enterButton,
    allowClear,
    loading,
    value,
    style,
    onSearch,
    onChange,
    onFocus,
    onBlur,
  } = searchProps;

  const [showClear, setshowClear] = useState<boolean>(false);
  const [searchValue, setsearchValue] = useState<string | undefined>(value);
  const [showBorder, setshowBorder] = useState<boolean>(false);
  const [showShadow, setshowShadow] = useState<boolean>(false);
  const [inputFocus, setinputFocus] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const inputContainerRef = useRef<HTMLElement>(null);

  /**
   * 输入框 - change
   */
  const handleSearchInput = function (event: BaseSyntheticEvent) {
    setsearchValue(searchInputRef.current?.value);
    onChange && onChange(event);
  };

  /**
   * 点击清除 icon
   */
  const handleClickClose = function () {
    setsearchValue("");
    setshowClear(!showClear);
    setinputFocus(true);
    searchInputRef.current?.focus();
  };

  /**
   * 点击搜索
   */
  const handleClickSearch = function (event: BaseSyntheticEvent) {
    onSearch && onSearch(searchValue, event);
  };

  /**
   * input - focus
   */
  const handleFocus = function (event: BaseSyntheticEvent) {
    onFocus && onFocus(event);
  };

  /**
   * input - blur
   */
  const handleBlur = function (event: BaseSyntheticEvent) {
    onBlur && onBlur(event);
  };

  /**
   * icon
   */
  const iconBtn = function () {
    if (!enterButton) {
      // return <SearchIcon />;
      if (!loading) {
        return <SearchIcon />;
      } else {
        return (
          <span className={Style.n_search_icons}>
            <Loading />
          </span>
        );
      }
    } else if (enterButton === true) {
      if (!loading) {
        return <SearchIcon color="#fff" />;
      } else {
        return (
          <span>
            <Loading color="#fff" /> <SearchIcon color="#fff" />;
          </span>
        );
      }
    } else {
      if (loading) {
        return <Loading color="#fff" />;
      }
    }
  };

  useEffect(() => {
    allowClear && searchValue ? setshowClear(true) : setshowClear(false);
  }, [searchValue, allowClear]);

  useEffect(() => {
    const inputContainer = inputContainerRef.current;
    inputContainer?.addEventListener("mouseenter", () => {
      setshowBorder(true);
    });
    inputContainer?.addEventListener("mouseleave", () => {
      inputFocus ? setshowBorder(true) : setshowBorder(false);
    });
    searchInputRef.current?.addEventListener("focus", () => {
      setinputFocus(true);
      setshowBorder(true);
      setshowShadow(true);
    });
    searchInputRef.current?.addEventListener("blur", () => {
      setinputFocus(false);
      setshowBorder(false);
      setshowShadow(false);
    });
  }, [inputFocus]);

  return (
    <div
      className={Style.n_input_search}
      style={{
        width: width,
        ...style,
      }}
    >
      <span
        className={Style.n_search_input_container}
        ref={inputContainerRef}
        style={{
          paddingRight: allowClear ? 25 : "",
          borderColor: showBorder ? "#1890ff" : "#D9D9D9",
          boxShadow: showShadow ? "0 0 3px #40a9ff" : "none",
        }}
      >
        <input
          type="text"
          // className={[`${style.n_input}`].join(" ")}
          className={[`${Style.n_search_input}`].join(" ")}
          placeholder={placeholder}
          value={searchValue}
          ref={searchInputRef}
          onChange={handleSearchInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {showClear && (
          <span className={Style.closeFill} onClick={handleClickClose}>
            <Closefill />
          </span>
        )}
      </span>
      <span
        className={Style.n_input_search_container}
        onClick={handleClickSearch}
      >
        {/* loading */}
        {/* <span className={style.search_loading}>{loading && <Loading />}</span> */}
        {/* {loading && !enterButton && <Button icon={<Loading />}></Button>} */}
        {/* 搜索按钮*/}
        {!enterButton ? (
          <Button icon={iconBtn()}></Button>
        ) : (
          (enterButton !== true && (
            <Button type="primary" icon={iconBtn()}>
              {enterButton}
            </Button>
          )) ||
          (enterButton === true && (
            <Button type="primary" icon={iconBtn()}></Button>
          ))
        )}
      </span>
    </div>
  );
}

Input.Search = Search;

// Input.TextArea

interface textAreaProps {
  rows?: number;
  cols?: number;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  bordered?: boolean;
  style?: object;

  onPressEnter?: Function;
  onBlur?: Function;
  onFocus?: Function;
  onChange?: Function;
}

function TextArea(Props: textAreaProps) {
  const {
    rows,
    cols,
    maxLength,
    placeholder,
    value,
    style,
    bordered = true,
    onPressEnter,
    onBlur,
    onFocus,
    onChange,
  } = Props;

  const [textareaVal, settextareaVal] = useState(value);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        onPressEnter && onPressEnter(event);
      }
    });
  }, [onPressEnter]);

  /**
   * 输入事件
   */
  const handleTextareaChange = function (e: BaseSyntheticEvent) {
    settextareaVal(textareaRef.current?.value);
    onChange && onChange(e);
  };

  /**
   * blur
   */
  const handleTextAreaBlur = function (e: BaseSyntheticEvent) {
    onBlur && onBlur(e);
  };

  /**
   * focus
   */
  const handleTextAreaFocus = function (e: BaseSyntheticEvent) {
    onFocus && onFocus(e);
  };

  return (
    <>
      <textarea
        className={[`${Style.n_input_textarea}`].join(" ")}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        value={textareaVal}
        ref={textareaRef}
        onChange={handleTextareaChange}
        style={{
          border: !bordered ? "none" : "",
          boxShadow: !bordered ? "none" : "",
          ...style,
        }}
        onBlur={handleTextAreaBlur}
        onFocus={handleTextAreaFocus}
      ></textarea>
    </>
  );
}

Input.TextArea = TextArea;
