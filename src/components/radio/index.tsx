/*
 * @Author: your name
 * @Date: 2021-10-29 16:12:00
 * @LastEditTime: 2021-11-25 09:26:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\radio\index.tsx
 */
import {
  ReactElement,
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  BaseSyntheticEvent,
} from "react";
import "./index.scss";
import classnames from "classnames";

interface Context {
  radioName: string;
  groupValue?: string | number;
  optionType?: string;
  buttonStyle?: string;
  radioChange?: Function;
}

const defaultContext: Context = {
  radioName: `radioName${Math.round(Math.random() * (10000 - 10) + 1)}`,
  groupValue: "",
  buttonStyle: "",
  optionType: "",
};

const GroupContext = createContext(defaultContext);

interface radioProps {
  value?: string | number;
  children?: string;
  disabled?: boolean;
}

export default function Radio(Props: radioProps) {
  const { value, children, disabled } = Props;

  const radioRef = useRef<HTMLInputElement>(null);

  const { radioName, groupValue, radioChange, optionType, buttonStyle } =
    useContext(GroupContext);

  const [radioValue, setradioValue] = useState(groupValue);

  useEffect(() => {
    setradioValue(groupValue);
  }, [groupValue]);

  const handleRadioChange = function (event: BaseSyntheticEvent) {
    if (disabled) {
      return;
    }
    let radioRefValue: number | string | undefined = radioRef.current?.value;
    setradioValue(radioRefValue);
    radioChange && radioChange(radioRefValue, event);
  };

  return optionType === "button" ? (
    <label
      className={classnames(
        "n_radio_button_wrapper",
        `${disabled ? "n_radio_button_disabled" : ""}`,
        `${
          String(radioValue) === String(value) && buttonStyle !== "solid"
            ? "n_radio_button_checked"
            : buttonStyle === "solid" && String(radioValue) === String(value)
            ? "n_radio_button_solid_checked"
            : ""
        }`
      )}
    >
      <span className={"n_button_radio"}>
        <input
          className={"n_radio_input"}
          type="radio"
          name={radioName}
          value={value}
          ref={radioRef}
          checked={String(radioValue) === String(value)}
          onChange={handleRadioChange}
        />
        <span className={classnames("n_radio_inner")}></span>
      </span>
      <span className={classnames("n_radio_text")}>{children}</span>
    </label>
  ) : (
    <label
      className={classnames(
        `n_radio_wrapper`,
        `${disabled ? "n_radio_disabled" : ""}`
      )}
    >
      <span
        className={classnames(
          `n_radio`,
          `${String(radioValue) === String(value) ? "n_radio_checked" : ""}`
        )}
      >
        <input
          className={classnames("n_radio_input")}
          type="radio"
          name={radioName}
          value={value}
          ref={radioRef}
          checked={String(radioValue) === String(value)}
          onChange={handleRadioChange}
        />
        <span className={classnames("n_radio_inner")}></span>
      </span>
      <span className={classnames("n_radio_text")}>{children}</span>
    </label>
  );
}

/**
 * Group
 */
type option = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface groupProps {
  value?: string | number;
  children?: Array<ReactElement>;
  options?: Array<option>;
  optionType?: "button";
  buttonStyle?: "solid";

  onChange?: Function;
}

Radio.Group = function Group(Props: groupProps) {
  const { children, value, options, optionType, buttonStyle, onChange } = Props;

  const [groupVal, setgroupVal] = useState(value);

  const name = `radioName${Math.round(Math.random() * (10000 - 10) + 1)}`;

  return (
    <div className={classnames("n_radio_group")}>
      <GroupContext.Provider
        value={{
          radioName: name,
          groupValue: groupVal,
          optionType,
          buttonStyle,
          radioChange: (newVal: string | number, event: BaseSyntheticEvent) => {
            setgroupVal(newVal);
            onChange && onChange(newVal);
          },
        }}
      >
        {options && options.length
          ? options.map((item) => (
              <Radio
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </Radio>
            ))
          : children}
      </GroupContext.Provider>
    </div>
  );
};
