/*
 * @Author: your name
 * @Date: 2021-12-15 15:06:34
 * @LastEditTime: 2021-12-15 15:11:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\drawer\index.tsx
 */
import React from "react";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
}

function Drawer(Props: IProps) {

  return (
    <div className={["n_drawer"].join(" ")}>
    </div>
  )
}

export default Drawer;