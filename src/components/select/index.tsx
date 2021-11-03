import Style from "./index.module.scss";
import { Bottom } from "../../Icons/icon/index";

interface IProps {
  children: any;
  placeholder?: string;
  style?: object;
}

function Select(Props: IProps) {
  const { placeholder = "", style } = Props;

  return (
    <div
      className={[`${Style.n_select}`].join(" ")}
      style={{
        ...style,
      }}
    >
      <span className={[`${Style.n_select_input}`].join(" ")}>
        <input type="text" placeholder={placeholder} />
      </span>
      <span className={[`${Style.n_select_icon}`].join(" ")}>
        <Bottom />
      </span>
      {/* {children} */}
    </div>
  );
}

/**
 * Option
 */

interface optionProps {
  value: string;
  children: string;
}

function Option(Props: optionProps) {
  const { children } = Props;

  return <>{children}</>;
}

Select.Option = Option;

export default Select;
