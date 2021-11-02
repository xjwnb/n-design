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
import style from "./index.module.scss";

type sizeValue = "large" | "middle" | "small";

interface IProps {
  placeholder?: string;
  value?: string;
  size?: sizeValue;
  prefix?: ReactElement;
  suffix?: ReactElement;
  maxLength?: number;

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
    <div className={style.input_container}>
      {!prefix && (
        <input
          placeholder={placeholder}
          className={[
            `${style.n_input}`,
            `${size && size === "large" ? style.n_input_lg : ""}`,
            `${size && size === "small" ? style.n_input_sm : ""}`,
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
          className={style.input_flex_content}
          ref={inputContainerRef}
          style={{
            borderColor: showBorder ? "#1890ff" : "#D9D9D9",
            boxShadow: showShadow ? "0 0 3px #40a9ff" : "none",
          }}
        >
          {prefix && <span className={style.iconPrefix}>{prefix}</span>}
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
          {suffix && <span className={style.iconSuffix}>{suffix}</span>}
        </div>
      )}
    </div>
  );
}

// Input.Password
type typeValue = "password" | "text";

interface PwdProps {
  placeholder?: string;
}
/**
 * 密码框组件
 * @param pwdProps
 * @returns reactElement
 */
function Password(pwdProps: PwdProps) {
  const { placeholder } = pwdProps;

  const [eye, seteye] = useState<boolean>(false);
  const [type, settype] = useState<typeValue>("password");

  const handleEyeClick = function () {
    seteye(!eye);
    type === "password" ? settype("text") : settype("password");
  };

  return (
    <div className={style.n_input_password}>
      <input
        className={[`${style.n_input}`].join(" ")}
        type={type}
        placeholder={placeholder}
      />
      {eye ? (
        <span className={style.suffix_eye} onClick={handleEyeClick}>
          <EyeOpen />
        </span>
      ) : (
        <span className={style.suffix_eye} onClick={handleEyeClick}>
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
    onSearch,
    onChange,
    onFocus,
    onBlur,
  } = searchProps;

  const [showClear, setshowClear] = useState<boolean>(false);
  const [searchValue, setsearchValue] = useState<string | undefined>("");
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
          <span className={style.n_search_icons}>
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
      className={style.n_input_search}
      style={{
        width: width,
      }}
    >
      <span
        className={style.n_search_input_container}
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
          className={[`${style.n_search_input}`].join(" ")}
          placeholder={placeholder}
          value={searchValue}
          ref={searchInputRef}
          onChange={handleSearchInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {showClear && (
          <span className={style.closeFill} onClick={handleClickClose}>
            <Closefill />
          </span>
        )}
      </span>
      <span
        className={style.n_input_search_container}
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

  onPressEnter?: Function;
}

function TextArea(Props: textAreaProps) {
  const {
    rows,
    cols,
    maxLength,
    placeholder,
    value,
    bordered = true,
    onPressEnter,
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
  const handleTextareaChange = function () {
    settextareaVal(textareaRef.current?.value);
  };

  return (
    <>
      <textarea
        className={[`${style.n_input_textarea}`].join(" ")}
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
        }}
      ></textarea>
    </>
  );
}

Input.TextArea = TextArea;
