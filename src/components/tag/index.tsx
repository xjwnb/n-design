/*
 * @Author: your name
 * @Date: 2021-12-21 09:00:39
 * @LastEditTime: 2021-12-21 11:11:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\tag\index.tsx
 */
import React, { useEffect, useState, useRef, BaseSyntheticEvent } from "react";
import "./index.scss";
import classnames from "classnames";
import { Close } from "../../Icons/icon/index";

// 预置颜色
const colorObj: {
  [key in string]: any;
} = {
  default: {
    border: "#D9D9D9",
    color: "#252525",
    background: "#FAFAFA",
  },
  success: {
    border: "#B7EB8F",
    color: "#52C41A",
    background: "#F6FFED",
  },
  processing: {
    border: "#91D5FF",
    color: "#189DFF",
    background: "#E6F7FF",
  },
  error: {
    border: "#FFCCC7",
    color: "#FF4D93",
    background: "#FFF2F0",
  },
  warning: {
    border: "#FFE58F",
    color: "#FBAD14",
    background: "#FFFBE6",
  },
  magenta: {
    border: "#FFADD2",
    color: "#CF1D7F",
    background: "#FFF0F6",
  },
  red: {
    border: "#FFA39E",
    color: "#CF1322",
    background: "#FFF1F0",
  },
  volcano: {
    border: "#FFBB96",
    color: "#D4380D",
    background: "#FFF2E8",
  },
  orange: {
    border: "#FFD591",
    color: "#E08108",
    background: "#FFF7E6",
  },
  gold: {
    border: "#FFE58F",
    color: "#D7887A",
    background: "#FFFBE6",
  },
  lime: {
    border: "#EAFF8F",
    color: "#7CB305",
    background: "#FCFFE6",
  },
  green: {
    border: "#B7EB8F",
    color: "#389E81",
    background: "#F6FFED",
  },
  cyan: {
    border: "#87E8DE",
    color: "#7B979C",
    background: "#E6FFFB",
  },
  blue: {
    border: "#91D5FF",
    color: "#096DD9",
    background: "#E6F7FF",
  },
  geekblue: {
    border: "#ADC6FF",
    color: "#1D39C4",
    background: "#F0F5FF",
  },
  purple: {
    border: "#D3ADF7",
    color: "#531DAB",
    background: "#F9F0FF",
  },
};

interface IProps {
  children?: React.ReactNode;
  color?: string;
  closable?: boolean;
  visible?: boolean;
  icon?: React.ReactNode;

  onClose?: (e: BaseSyntheticEvent) => void;
}

function Tag(Props: IProps) {
  const {
    children,
    color = "default",
    closable = false,
    visible = true,
    icon,
    onClose,
  } = Props;

  const [fontColor, setfontColor] = useState("");
  const [background, setbackground] = useState("");
  const [border, setborder] = useState("");
  const [iconCopy, seticonCopy] = useState<any>("");

  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Object.keys(colorObj).includes(color)) {
      setfontColor(colorObj[color].color);
      setbackground(colorObj[color].background);
      setborder(colorObj[color].border);
    } else {
      setfontColor("#fff");
      setbackground(color);
      setborder(color);
    }
  }, [color]);

  useEffect(() => {
    if (icon) {
      seticonCopy(
        React.cloneElement(
          icon as React.DetailedReactHTMLElement<any, HTMLElement>,
          { width: 12, height: 12, color: fontColor }
        )
      );
    }
  }, [icon, fontColor]);

  /**
   * 点击关闭
   */
  const handleClose = function (e: BaseSyntheticEvent) {
    onClose?.(e);
    if (tagRef.current) {
      tagRef.current.style.display = "none";
    }
  };

  return (
    <span
      className={classnames("n_tag")}
      style={{
        color: fontColor,
        border: `1px solid ${border}`,
        background,
        opacity: visible ? 1 : 0,
      }}
      ref={tagRef}
    >
      {icon ? (
        <span
          style={{
            marginRight: 5,
          }}
        >
          {iconCopy}
        </span>
      ) : (
        ""
      )}
      {children}
      {closable ? (
        <span
          style={{
            marginLeft: 5,
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <Close width={12} height={12} color={fontColor} />
        </span>
      ) : (
        ""
      )}
    </span>
  );
}

export default Tag;
