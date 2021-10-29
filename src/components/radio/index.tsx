/*
 * @Author: your name
 * @Date: 2021-10-29 16:12:00
 * @LastEditTime: 2021-10-29 17:34:18
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
import style from "./index.module.scss";

interface Context {
  radioName: string;
  groupValue?: string | number;
  radioChange?: Function;
}

const defaultContext: Context = {
  radioName: `radioName${Math.round(Math.random() * (10000 - 10) + 1)}`,
  groupValue: "",
};

const GroupContext = createContext(defaultContext);

interface radioProps {
  value?: string | number;
  children?: string;
}

export default function Radio(Props: radioProps) {
  const { value, children } = Props;

  const radioRef = useRef<HTMLInputElement>(null);

  const { radioName, groupValue, radioChange } = useContext(GroupContext);

  const [radioValue, setradioValue] = useState(groupValue);
  const [radioValueType] = useState<string>(typeof radioValue);

  useEffect(() => {}, [radioName, groupValue]);

  const handleRadioChange = function (event: BaseSyntheticEvent) {
    let radioRefValue: number | string | undefined = radioRef.current?.value;
    if (radioValueType === "number") {
      radioRefValue = Number(radioRefValue);
    }
    setradioValue(radioRefValue);
    radioChange && radioChange(radioRefValue);
  };

  return (
    <label className={style.n_radio_wrapper}>
      <span className={style.n_radio}>
        <input
          type="radio"
          name={radioName}
          value={value}
          ref={radioRef}
          checked={radioValue === value}
          onChange={handleRadioChange}
        />
        <span className="n_radio_inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
}

/**
 * Group
 */
interface groupProps {
  value?: string | number;
  children?: Array<ReactElement>;

  onChange?: Function;
}

Radio.Group = function Group(Props: groupProps) {
  const { children, value } = Props;

  const [groupVal, setgroupVal] = useState(value);

  const name = `radioName${Math.round(Math.random() * (10000 - 10) + 1)}`;

  return (
    <div className={style.n_radio_group}>
      <GroupContext.Provider
        value={{
          radioName: name,
          groupValue: groupVal,
          radioChange: (newVal: string | number) => {
            setgroupVal(newVal);
          },
        }}
      >
        {children}
      </GroupContext.Provider>
    </div>
  );
};
