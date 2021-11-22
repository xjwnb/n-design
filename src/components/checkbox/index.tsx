/*
 * @Author: your name
 * @Date: 2021-11-22 08:56:32
 * @LastEditTime: 2021-11-22 14:02:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\checkbox\index.tsx
 */
import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  BaseSyntheticEvent,
} from "react";
import Style from "./index.module.scss";

interface checkboxProps {
  children: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: string;

  onChange?: Function;
}

/**
 * group context
 */
interface groupInterface {
  checkChange: Function;
}

const defaultGroupContext: groupInterface = {
  checkChange: () => {},
};

const GroupContext = createContext(defaultGroupContext);

function Checkbox(Props: checkboxProps) {
  const {
    children,
    // eslint-disable-next-line
    checked = false,
    disabled = false,
    defaultChecked = false,
    value,
    onChange,
  } = Props;

  const [checkedVal, setcheckedVal] = useState<boolean>(defaultChecked);
  const [disabledVal, setdisabledVal] = useState<boolean>(disabled);

  const checkboxInputRef = useRef<HTMLInputElement>(null);

  const { checkChange } = useContext(GroupContext);

  useEffect(() => {
    setdisabledVal(disabled);
  }, [disabled]);

  /**
   * 点击 checkbox
   */
  /* const handleCheckboxClick = function () {
    console.log("什么玩意儿");
    // setcheckedVal(!checkedVal);
    // console.log(checkboxInputRef);
    // onChange && onChange();
  }; */

  /**
   * checkbox onChange
   */
  const handleCheckboxChange = function (e: BaseSyntheticEvent) {
    setcheckedVal(e.target.checked);
    onChange && onChange(e);
    checkChange(value, e.target.checked);
  };

  return (
    <label
      className={[
        Style.n_checkbox_wrapper,
        disabledVal ? Style.n_checkbox_wrapper_disabled : "",
      ].join(" ")} /*  onClick={handleCheckboxClick} */
    >
      <span
        className={[
          Style.n_checkbox,
          checkedVal ? Style.n_checkbox_checked : "",
          disabledVal ? Style.n_checkbox_disabled : "",
        ].join(" ")}
      >
        <input
          type="checkbox"
          disabled={disabledVal}
          className={Style.n_checkbox_input}
          ref={checkboxInputRef}
          checked={checkedVal}
          onChange={handleCheckboxChange}
          value={value}
        />
        <span className={Style.n_checkbox_input_inner}></span>
      </span>
      <span className={Style.n_checkbox_text}>{children}</span>
    </label>
  );
}

/**
 * Group
 */
interface groupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface groupProps {
  options: Array<groupOption>;
  defaultValue?: Array<string>;
  value?: Array<string>;
  disabled?: boolean;

  onChange?: Function;
}

function Group(Props: groupProps) {
  const { options, disabled = false, defaultValue = [], onChange } = Props;

  const [defaultOptions, setdefaultOptions] =
    useState<Array<groupOption>>(options);

  const [groupVal, setgroupVal] = useState(defaultValue);

  useEffect(() => {
    if (disabled) {
      setdefaultOptions(
        defaultOptions.map((item) => {
          return {
            ...item,
            disabled: true,
          };
        })
      );
    }
    // eslint-disable-next-line
  }, [disabled]);

  useEffect(() => {
    onChange && onChange(groupVal);
  }, [groupVal, onChange]);

  return (
    <div className={[Style.n_checkbox_group].join(" ")}>
      <GroupContext.Provider
        value={{
          checkChange: function (
            // label: string,
            value: string,
            checked: boolean
          ) {
            // console.log(label, value, checked);
            if (checked && !groupVal.includes(value)) {
              setgroupVal([...groupVal, value]);
            } else if (!checked && groupVal.includes(value)) {
              setgroupVal(groupVal.filter((item) => item !== value));
            }
          },
        }}
      >
        {defaultOptions.map((item) => {
          return (
            <Checkbox
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              defaultChecked={defaultValue.includes(item.value)}
            >
              {item.label}
            </Checkbox>
          );
        })}
      </GroupContext.Provider>
    </div>
  );
}

Checkbox.Group = Group;

export default Checkbox;