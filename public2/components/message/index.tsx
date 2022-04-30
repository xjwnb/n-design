/*
 * @Author: your name
 * @Date: 2021-12-10 14:43:26
 * @LastEditTime: 2021-12-14 14:50:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\message\index.tsx
 */
import React, { useState, useEffect } from "react";
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
  type?: "info" | "success" | "error" | "warning";
  id?: number;
  icon?: React.ReactNode;
  className?: string;

  onClick?: Function;
}

function Message(Props: IProps) {
  const { type = "info", content, id, icon, className, onClick } = Props;

  const [iconNode, seticonNode] = useState(
    <Infofill width={15} height={15} color="#1890FF" />
  );

  useEffect(() => {
    if (icon) return;
    switch (type) {
      case "info":
        seticonNode(<Infofill width={15} height={15} color="#52ACFF" />);
        break;
      case "success":
        seticonNode(<SuccessFill width={15} height={15} color="#52C41A" />);
        break;
      case "error":
        seticonNode(<ErrorFill width={15} height={15} color="#FF4D4F" />);
        break;
      case "warning":
        seticonNode(<WarningFill width={15} height={15} color="#FAAD14" />);
        break;
    }
  }, [type, icon]);

  /**
   * 点击事件
   */
  const handleClickMessage = function () {
    onClick?.();
  };

  return (
    <div
      id={`n_message_${id}`}
      className={[Style.n_message_wrapper, className].join(" ")}
      onClick={handleClickMessage}
    >
      <div className={[Style.n_message_icon].join(" ")}>
        {icon ? <span>{icon}</span> : <span>{iconNode}</span>}
      </div>
      <div className={[Style.n_message_content].join(" ")}>{content}</div>
    </div>
  );
}
let uid = 0;

function MessageControl(
  type: "info" | "success" | "error" | "warning",
  content: string | IProps,
  duration?: number,
  onClose?: Function
) {
  let innerText = typeof content === "string" ? content : content.content;
  const props = typeof content === "string" ? {} : content;
  uid++;
  let flag = document.getElementById("n_message");
  let targetEle: Node | null = null;
  if (!flag) {
    const messageEle = document.createElement("div");
    messageEle.id = "n_message";
    messageEle.style.position = "fixed";
    messageEle.style.top = "0px";
    messageEle.style.left = "50%";
    messageEle.style.transform = "translateX(-50%)";
    const el = document.createElement("div");
    el.appendChild(messageEle);
    // document.getElementsByClassName("App")[0]?.appendChild(el);
    document.getElementById('root')?.appendChild(el);
    ReactDom.render(
      <Message id={uid} type={type} content={innerText} {...props} />,
      messageEle,
      () => {
        if (duration === 0) return;
        setTimeout(() => {
          messageEle.children[0].remove();
          onClose?.();
        }, (duration || 3) * 1000);
      }
    );
  } else {
    const container = document.createElement("div");
    ReactDom.render(
      <Message id={uid} type={type} content={innerText} {...props} />,
      container,
      () => {
        setTimeout(() => {
          targetEle = container.children[0];
          flag?.appendChild(container.children[0]);
        });
      }
    );
  }

  if (duration === 0) return;
  setTimeout(() => {
    flag?.removeChild(targetEle as Node);
    onClose?.();
  }, (duration || 3) * 1000);
}

Message.info = (
  content: string | IProps,
  duration?: number,
  onClose?: Function
) => MessageControl("info", content, duration, onClose);
Message.success = (
  content: string | IProps,
  duration?: number,
  onClose?: Function
) => MessageControl("success", content, duration, onClose);
Message.error = (
  content: string | IProps,
  duration?: number,
  onClose?: Function
) => MessageControl("error", content, duration, onClose);
Message.warning = (
  content: string | IProps,
  duration?: number,
  onClose?: Function
) => MessageControl("warning", content, duration, onClose);

export default Message;
