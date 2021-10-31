/*
 * @Author: your name
 * @Date: 2021-10-31 17:03:08
 * @LastEditTime: 2021-10-31 18:38:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\switch\index.tsx
 */
import { useState, BaseSyntheticEvent, ReactElement } from "react";
import style from "./index.module.scss";

interface IProps {
  defaultValue?: boolean;
  checkedChildren?: ReactElement | string;
  unCheckedChildren?: ReactElement | string;
  disabled?: boolean;
  onChange?: Function;
}

export default function Switch(Props: IProps) {
  const {
    defaultValue,
    checkedChildren,
    unCheckedChildren,
    disabled,
    onChange,
  } = Props;

  const [value, setvalue] = useState(defaultValue);

  /**
   * 点击事件
   */
  const handleClick = function (event: BaseSyntheticEvent) {
    // console.log(event);
    if (disabled) return;
    setvalue(!value);

    onChange && onChange(value, event);
  };

  return (
    <button
      className={[
        `${style.n_switch}`,
        `${value ? style.n_switch_checked : ""}`,
        `${disabled ? style.n_switch_disabled : ""}`,
      ].join(" ")}
      onClick={handleClick}
    >
      <div className={style.n_switch_handle}></div>
      <span className={style.n_switch_inner}>
        {value ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  );
}
