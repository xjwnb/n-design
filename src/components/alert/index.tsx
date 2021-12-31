/*
 * @Author: your name
 * @Date: 2021-12-31 13:34:50
 * @LastEditTime: 2021-12-31 14:14:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\alert\index.tsx
 */
import Style from "./index.module.scss";
import { SuccessFill, Close } from "../../Icons/icon/index";

interface IProps {
  message?: string | React.ReactNode;
  description?: string | React.ReactNode;
  type?: "success" | "info" | "warning" | "error";
  closable?: boolean;
  closeText?: string;
  showIcon?: boolean;

  onClose?: (e: MouseEvent) => void;
}

const TypeObj = {
  success: {
    background: "#F6FFED",
    border: "1px solid #B7EB8F",
  },
  info: {
    background: "#E6F7FF",
    border: "1px solid #91D5FF",
  },
  warning: {
    background: "#FFFBE6",
    border: "1px solid #FFE58F",
  },
  error: {
    background: "#FFF2F0",
    border: "1px solid #FFCCC7",
  },
};

function Alert(Props: IProps) {
  const {
    type = "info",
    message = "",
    description = "",
    showIcon = false,
    closable = false,
  } = Props;

  return (
    <div
      className={[Style.n_alert].join(" ")}
      style={{
        background: TypeObj[type].background,
        border: TypeObj[type].border,
      }}
    >
      {showIcon && (
        <span>
          <SuccessFill />
        </span>
      )}
      <div className={[Style.n_alert_content].join(" ")}>
        <div className={[Style.n_alert_inner].join(" ")}>
          <div className={[Style.n_alert_message].join(" ")}>{message}</div>
          {description && (
            <div className={[Style.n_alert_description].join(" ")}>
              {description}
            </div>
          )}
        </div>
        {closable && (
          <div className={[Style.n_alert_close_icon].join(" ")}>
            <Close />
          </div>
        )}
      </div>
    </div>
  );
}

export default Alert;
