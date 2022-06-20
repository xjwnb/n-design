/*
 * @Author: your name
 * @Date: 2021-12-22 14:51:50
 * @LastEditTime: 2021-12-27 16:27:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\collapse\index.tsx
 */
import React, { useState, useEffect, createContext, useContext } from "react";
import "./index.scss";
import classnames from "classnames";
import { Right } from "../../Icons/icon/index";

interface IProps {
  children: React.ReactNode;
  defaultActiveKey?: Array<any>;
  accordion?: boolean;
  ghost?: boolean;

  onChange?: (value: Array<String>) => void;
}

interface PancelContextParams {
  currentKeys: Array<any>;
  ghost: boolean;
  onClickPancel: (id: string) => void;
}

const defaultPancelContext: PancelContextParams = {
  currentKeys: [],
  ghost: false,
  onClickPancel: (id) => {},
};

const PancelContext = createContext(defaultPancelContext);

function Collapse(Props: IProps) {
  const {
    children,
    defaultActiveKey = [],
    accordion = false,
    ghost = false,
    onChange,
  } = Props;

  const [currentKey, setcurrentKey] = useState(defaultActiveKey);

  return (
    <div className={classnames("n_collapse")}>
      <PancelContext.Provider
        value={{
          currentKeys: currentKey,
          ghost,
          onClickPancel: (id: string) => {
            if (!accordion) {
              let current = currentKey;
              if (currentKey.includes(id)) {
                current = currentKey.filter((item) => item !== id);
                setcurrentKey(current);
              } else {
                current = [...currentKey, id];
                setcurrentKey(current);
              }
              onChange?.(current);
            } else {
              if (currentKey.includes(id)) {
                setcurrentKey([]);
                onChange?.([]);
              } else {
                setcurrentKey([id]);
                onChange?.([id]);
              }
            }
          },
        }}
      >
        {children}
      </PancelContext.Provider>
    </div>
  );
}

/**
 * Pancel
 */
interface PancelProps {
  id: string;
  header: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

function Pancel(Props: PancelProps) {
  const { children, header = "", id, showArrow = true } = Props;

  const [isShow, setisShow] = useState(false);

  const { currentKeys, onClickPancel, ghost } = useContext(PancelContext);

  useEffect(() => {
    setisShow(currentKeys.includes(id));
  }, [currentKeys, id]);

  /**
   * header 点击折叠弹出内容
   */
  const handleClickHeader = function () {
    onClickPancel(id);
  };

  return (
    <div
      className={classnames("n_collapse_pancel")}
      style={{
        border: ghost ? "" : `1px solid #dcdcdc`,
      }}
    >
      <div
        className={classnames("n_collapse_pancel_header")}
        onClick={handleClickHeader}
        style={{
          background: ghost ? `rgba(255, 255, 255, 0)` : "",
        }}
      >
        {showArrow ? (
          <span
            className={classnames("n_collapse_pancel_header_icon")}
            style={{
              transform: isShow ? `rotate(90deg)` : "",
            }}
          >
            <Right width={12} height={12} />
          </span>
        ) : (
          ""
        )}
        <span className={classnames("n_collapse_pancel_header_title")}>
          {header}
        </span>
      </div>
      <div
        className={classnames("n_collapse_pancel_content_wrapper")}
        style={{
          maxHeight: isShow ? "10000px" : "0px",
          background: ghost ? `rgba(255, 255, 255, 0)` : "#fff",
        }}
      >
        <div className={classnames("n_collapse_pancel_content")}>
          {children}
        </div>
      </div>
    </div>
  );
}

Collapse.Pancel = Pancel;

export default Collapse;
