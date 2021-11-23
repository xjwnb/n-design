/*
 * @Author: your name
 * @Date: 2021-11-23 15:37:44
 * @LastEditTime: 2021-11-23 15:43:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\tabs\index.tsx
 */

import { ReactElement } from "react";
// Style 
import Style from "./index.module.scss";

interface tabsProps {
  children?: Array<ReactElement>;
}

function Tabs (Props: tabsProps) {
  const { children } = Props;

  return (
    <div className={Style.n_tabs}>
      {children}
    </div>
  )
}



/**
 * TabPane
 */
interface tabPaneProps {
  children?: any;
}

function TabPane(Props: tabPaneProps) {
  const { children } = Props;

  return (
    <>
      {children}
    </>
  )
}

Tabs.TabPane = TabPane;

export default Tabs;