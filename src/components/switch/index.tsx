import { useState, BaseSyntheticEvent, ReactElement } from "react";
import "./index.scss";
import classnames from "classnames";

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
    if (disabled) return;
    setvalue(!value);

    onChange && onChange(!value, event);
  };

  return (
    <button
      className={classnames(
        "n_switch",
        `${value ? "n_switch_checked" : ""}`,
        `${disabled ? "n_switch_disabled" : ""}`
      )}
      onClick={handleClick}
    >
      <div className={classnames("n_switch_handle")}></div>
      <span className={classnames("n_switch_inner")}>
        {value ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  );
}
