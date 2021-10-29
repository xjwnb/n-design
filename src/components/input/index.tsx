/*
 * @Author: your name
 * @Date: 2021-10-28 14:31:22
 * @LastEditTime: 2021-10-29 14:25:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\input\index.tsx
 */

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

  onChange?: Function;
}

export default function Input(props: IProps) {
  const { placeholder, value, size, prefix, suffix, onChange } = props;

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
          // style={{
          //   paddingLeft: prefix ? "30px" : "11px",
          // }}
          onChange={handleChange}
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
              onChange={handleChange}
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
Input.Password = function Password(pwdProps: PwdProps) {
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
};

// Input.Search

interface searchProps {
  placeholder?: string;
  width?: number;
  enterButton?: string | boolean;
  allowClear?: boolean;
  loading?: boolean;
}

Input.Search = function Search(searchProps: searchProps) {
  const { placeholder, width, enterButton, allowClear, loading } = searchProps;

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
      // return <SearchIcon color="#fff" />;
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
        />
        {showClear && (
          <span className={style.closeFill} onClick={handleClickClose}>
            <Closefill />
          </span>
        )}
      </span>
      <span className={style.n_input_search_container}>
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
};
