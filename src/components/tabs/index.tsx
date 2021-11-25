/*
 * @Author: your name
 * @Date: 2021-11-23 15:37:44
 * @LastEditTime: 2021-11-25 08:40:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\tabs\index.tsx
 */

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useRef,
  BaseSyntheticEvent,
} from "react";
// interface
import { tabParam, tabsContextParam } from "./interface";
// Style
import Style from "./index.module.scss";

interface tabsProps {
  // children: Array<ReactElement> | ReactElement;
  children: any;
  defaultActiveKey?: string;
  centered?: boolean;
  tabPosition?: "top" | "bottom" | "left" | "right";
  onChange?: Function;
  onTabClick?: Function;
}

// context
const TabsContext = createContext<tabsContextParam>({
  activeKey: "1",
});

function Tabs(Props: tabsProps) {
  const {
    children,
    defaultActiveKey = "2",
    centered = false,
    tabPosition = "top",
    onChange,
    onTabClick,
  } = Props;

  const [tabList, settabList] = useState<Array<tabParam>>([]);
  const [currentKey, setcurrentKey] = useState(defaultActiveKey);
  const [left, setleft] = useState<number | string>(0);
  const [width, setwidth] = useState(0);
  const [top, settop] = useState<number | string>(0);
  const [height, setheight] = useState(0);

  const tabBtnRef = useRef<any>(null);

  useEffect(() => {
    // settabList(children.map(item))
    let child = children;
    if (!(children instanceof Array)) {
      child = [children];
    }
    settabList(
      child.map((item: any) => {
        return {
          id: item.props.id,
          text: item.props.tab,
          disabled: item.props.disabled || false,
        };
      })
    );
  }, [children]);

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < children.length; i++) {
        let child: any = tabBtnRef.current?.children[i];
        if (!child) return;
        let currentid = child?.dataset.currentid;
        if (currentid === currentKey) {
          if (["top", "bottom"].includes(tabPosition)) {
            let left = child.offsetLeft;
            let width = child.offsetWidth;
            setleft(left);
            setwidth(width);
          } else {
            let height = child.offsetHeight;
            let top = child.offsetTop;
            // setwidth(width);
            settop(top);
            setheight(height);
          }
        }
      }
    }, 500);
    // eslint-disable-next-line
  }, [children]);

  /**
   * 修改标签页
   */
  const handleTabsChange = useCallback(
    (id: string, e: BaseSyntheticEvent) => {
      onTabClick && onTabClick(id, e);
      let currentTab = tabList.filter(
        (item) => item.id === id && item.disabled
      );
      if (currentTab?.length) return;
      onChange && onChange(id);
      setcurrentKey(id);
    },
    [tabList, onChange, onTabClick]
  );

  useEffect(() => {
    for (let i = 0; i < children.length; i++) {
      if (children[i].props.disabled) continue;
      let child: any = tabBtnRef.current?.children[i];
      let currentid = child?.dataset.currentid;
      if (currentid === currentKey) {
        if (["top", "bottom"].includes(tabPosition)) {
          let left = child.offsetLeft;
          let width = child.offsetWidth;
          setleft(left);
          setwidth(width);
        } else {
          let height = child.offsetHeight;
          let top = child.offsetTop;
          settop(top);
          setheight(height);
        }
      }
    }
  }, [currentKey, children, tabPosition]);

  return (
    <div className={[Style.n_tabs, Style[`n_tabs_${tabPosition}`]].join(" ")}>
      {/* 标签 */}
      <div
        className={Style.n_tabs_container}
        ref={tabBtnRef}
        style={{
          justifyContent: centered ? "center" : "flex-start",
        }}
      >
        {tabList.map((item: tabParam) => (
          <div
            className={Style.n_tabs_tab}
            key={item.id}
            onClick={(e) => handleTabsChange(item.id, e)}
            data-currentid={item.id}
          >
            <div
              className={[
                Style.n_tabs_tab_btn,
                item.id === currentKey ? Style.n_tabs_tab_btn_active : "",
                item.disabled ? Style.n_tabs_tab_btn_disabled : "",
              ].join(" ")}
            >
              {item.text}
            </div>
          </div>
        ))}
        {/* 移动 bar */}
        <div
          className={Style.n_tabs_active_bar}
          style={{
            left: ["top", "bottom"].includes(tabPosition)
              ? left
              : ["left"].includes(tabPosition)
              ? "99%"
              : 0,
            width: ["top", "bottom"].includes(tabPosition) ? width : 0,
            height: ["left", "right"].includes(tabPosition) ? height : 2,
            top: ["left", "right"].includes(tabPosition)
              ? top
              : ["top"].includes(tabPosition)
              ? "99%"
              : 0,
          }}
        ></div>
      </div>
      <div className={Style.n_tabs_content}>
        <TabsContext.Provider
          value={{
            activeKey: currentKey,
          }}
        >
          {children}
        </TabsContext.Provider>
      </div>
    </div>
  );
}

/**
 * TabPane
 */
interface tabPaneProps {
  children?: any;
  tab: any;
  id: string;
  disabled?: boolean;
}

function TabPane(Props: tabPaneProps) {
  const { children, id } = Props;

  const { activeKey } = useContext(TabsContext);

  return (
    <div className={[Style.n_tabs_tabPane].join(" ")}>
      {activeKey === id && (
        <div className={Style.n_tabs_tabPane_content}>{children}</div>
      )}
    </div>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
