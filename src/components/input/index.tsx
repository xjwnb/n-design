/*
 * @Author: your name
 * @Date: 2021-10-28 14:31:22
 * @LastEditTime: 2021-10-28 17:32:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\input\index.tsx
 */

import React, {
  useRef,
  useState,
  BaseSyntheticEvent,
  ReactElement,
} from "react";
import { EyeOpen, EyeClose } from "../../Icons/icon/index";
import style from "./index.module.scss";

type sizeValue = "large" | "middle" | "small";

interface IProps {
  placeholder?: string;
  value?: string;
  size?: sizeValue;
  prefix?: ReactElement;

  onChange?: Function;
}

export default function Input(props: IProps) {
  const { placeholder, value, size, prefix, onChange } = props;
  const [inputValue, setinputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * input - change
   */
  const handleChange = function (event: BaseSyntheticEvent) {
    setinputValue(inputRef.current?.value);
    onChange && onChange(event);
  };

  return (
    <div className={style.input_container}>
      {prefix ? <span className={style.iconPrefix}>{prefix}</span> : ""}
      <input
        placeholder={placeholder}
        className={[
          `${style.n_input}`,
          `${size && size === "large" ? style.n_input_lg : ""}`,
          `${size && size === "small" ? style.n_input_sm : ""}`,
        ].join(" ")}
        value={inputValue}
        ref={inputRef}
        style={{
          paddingLeft: prefix ? "30px" : 0,
        }}
        onChange={handleChange}
      ></input>
    </div>
  );
}

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
