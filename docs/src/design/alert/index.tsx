/*
 * @Author: your name
 * @Date: 2021-12-31 13:34:50
 * @LastEditTime: 2021-12-31 15:14:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\alert\index.tsx
 */
import React, { BaseSyntheticEvent, useState } from "react";
import Style from "./index.module.scss";
import {
  SuccessFill,
  Close,
  Success,
  Info,
  Infofill,
  WarningCircle,
  WarningFill,
  Error,
  ErrorFill,
} from "../Icons/icon/index";

interface IProps {
  message?: string | React.ReactNode;
  description?: string | React.ReactNode;
  type?: "success" | "info" | "warning" | "error";
  closable?: boolean;
  closeText?: string;
  showIcon?: boolean;

  onClose?: (e: BaseSyntheticEvent) => void;
}

const TypeObj = {
  success: {
    background: "#F6FFED",
    border: "1px solid #B7EB8F",
    iconFill: <SuccessFill color="#52C41A" />,
    icon: <Success color="#52C41A" width={24} height={24} />,
  },
  info: {
    background: "#E6F7FF",
    border: "1px solid #91D5FF",
    iconFill: <Infofill color="#1890FF" />,
    icon: <Info color="#1890FF" width={24} height={24} />,
  },
  warning: {
    background: "#FFFBE6",
    border: "1px solid #FFE58F",
    iconFill: <WarningFill color="#FAAD14" />,
    icon: <WarningCircle color="#FAAD14" width={24} height={24} />,
  },
  error: {
    background: "#FFF2F0",
    border: "1px solid #FFCCC7",
    iconFill: <ErrorFill color="#FF4D4F" />,
    icon: <Error color="#FF4D4F" width={24} height={24} />,
  },
};

function Alert(Props: IProps) {
  const {
    type = "info",
    message = "",
    description = "",
    showIcon = false,
    closable = false,
    closeText = "",

    onClose,
  } = Props;

  const [visiabled, setvisiabled] = useState(true);

  /**
   * 点击关闭 icon
   */
  const handleIconClose = function (e: BaseSyntheticEvent) {
    setvisiabled(false);
    onClose?.(e);
  };

  return (
    <div
      className={[Style.n_alert].join(" ")}
      style={{
        background: TypeObj[type].background,
        border: TypeObj[type].border,
        display: visiabled ? "block" : "none",
      }}
    >
      <div className={[Style.n_alert_wrapper].join(" ")}>
        {showIcon && !description && (
          <span className={[Style.n_alert_type_icon].join(" ")}>
            {TypeObj[type].iconFill}
          </span>
        )}
        {showIcon && description && (
          <span className={[Style.n_alert_type_icon].join(" ")}>
            {TypeObj[type].icon}
          </span>
        )}
        <div className={[Style.n_alert_content].join(" ")}>
          <div className={[Style.n_alert_inner].join(" ")}>
            <div
              className={[Style.n_alert_message].join(" ")}
              style={{
                fontSize: description ? 16 : 14,
                marginBottom: description ? 10 : 0,
              }}
            >
              {message}
            </div>
            {description && (
              <div className={[Style.n_alert_description].join(" ")}>
                {description}
              </div>
            )}
          </div>
          {closable && (
            <div
              className={[Style.n_alert_close_icon].join(" ")}
              onClick={handleIconClose}
            >
              {closeText ? closeText : <Close color="#00000073" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Alert;
