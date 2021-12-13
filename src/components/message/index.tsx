/*
 * @Author: your name
 * @Date: 2021-12-10 14:43:26
 * @LastEditTime: 2021-12-10 18:49:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\message\index.tsx
 */
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
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
  id: number;
}

function Message(Props: IProps) {
  const { type = "info", content, id } = Props;

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
    <div id={`n_message_${id}`} className={[Style.n_message_wrapper].join(" ")}>
      <div className={[Style.n_message_icon].join(" ")}>
        <span>{iconNode}</span>
      </div>
      <div className={[Style.n_message_content].join(" ")}>
        {content}-{id}
      </div>
    </div>
  );
}
let uid = 0;

function MessageControl(
  type: "info" | "success" | "error" | "warning",
  content: string,
  duration?: number,
  onClose?: Function
) {
  uid++;
  let flag = document.getElementById("n_message");
  console.log(flag);
  if (!flag) {
    const messageEle = document.createElement("div");
    messageEle.id = "n_message";
    messageEle.style.position = "fixed";
    // messageEle.style.top = "100px";
    messageEle.style.top = "0px";
    messageEle.style.left = "50%";
    messageEle.style.transform = "translateX(-50%)";
    const el = document.createElement("div");
    el.appendChild(messageEle);
    document.getElementsByClassName("App")[0]?.appendChild(el);
    ReactDom.render(
      <Message id={uid} type={type} content={content} />,
      messageEle
    );
  } else {
    console.log("有");
    // 这个是直接新的直接覆盖之前的，只剩下一个，这里要的操作是flag里面addChild新的组件
    ReactDom.hydrate(
      ReactDom.createPortal(
        <Message id={uid} type={type} content={content} />,
        flag
      ),
      flag
    );
  }

  setTimeout(() => {
    // flag?.removeChild(document.getElementById(`n_message_${uid}`) as Element);
    // console.log(document.getElementById(`n_message_${uid}`));
    onClose?.();
  }, (duration || 3) * 1000);
}

type messageParam = (content: string, duration?: number, onClose?: Function) => any;

Message.info = (content: string, duration?: number, onClose?: Function) =>
  MessageControl("info", content, duration, onClose);
Message.success = (content: string, duration?: number, onClose?: Function) =>
  MessageControl("success", content, duration, onClose);
Message.error = (content: string, duration?: number, onClose?: Function) =>
  MessageControl("error", content, duration, onClose);
Message.warning = (content: string, duration?: number, onClose?: Function) =>
  MessageControl("warning", content, duration, onClose);

export default Message;
