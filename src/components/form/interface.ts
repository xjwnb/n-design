/*
 * @Author: your name
 * @Date: 2021-11-19 15:40:49
 * @LastEditTime: 2021-11-19 15:51:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\form\interface.ts
 */

import { ReactElement } from "react";


export interface formProps {
  children?: ReactElement;
  onFinish?: Function;
  labelCol?: colParam;
  wrapperCol?: colParam;
}

export interface colParam {
  span?: number;
  offset?: number;
}

export interface formContextParam {
  labelCol?: colParam;
  wrapperCol?: colParam;
}