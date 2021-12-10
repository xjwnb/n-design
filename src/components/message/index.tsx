/*
 * @Author: your name
 * @Date: 2021-12-10 14:43:26
 * @LastEditTime: 2021-12-10 14:58:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\message\index.tsx
 */
import { useState, useEffect } from "react";
import {
  Infofill,
  SuccessFill,
  ErrorFill,
  WarningFill,
} from "../../Icons/icon";
import Style from "./index.module.scss";

interface IProps {
  content: string;
  type: "info" | "success" | "error" | "warning";
}

function Message(Props: IProps) {
  const { type = "info", content } = Props;

  const [iconNode, seticonNode] = useState(<Infofill />);

  useEffect(() => {
    switch (type) {
      case "info":
        seticonNode(<Infofill />);
        break;
      case "success":
        seticonNode(<SuccessFill />);
        break;
      case "error":
        seticonNode(<ErrorFill />);
        break;
      case "warning":
        seticonNode(<WarningFill />);
        break;
    }
  }, [type]);

  return (
    <div className={[Style.n_message_wrapper].join(" ")}>
      <div className={[Style.n_message_icon].join(" ")}>
        <span>{iconNode}</span>
      </div>
      <div className={[Style.n_message_content].join(" ")}>{content}</div>
    </div>
  );
}

export default Message;
