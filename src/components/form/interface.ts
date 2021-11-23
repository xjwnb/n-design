/*
 * @Author: your name
 * @Date: 2021-11-19 15:40:49
 * @LastEditTime: 2021-11-23 14:09:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\form\interface.ts
 */

import { ReactElement } from "react";


export interface formProps {
  children?: Array<ReactElement>;
  labelCol?: colParam;
  wrapperCol?: colParam;
  initialValues?: {
    [key: string]: any;
  };
  onFinish?: Function;
  onFinishFailed?: Function;
}

export interface colParam {
  span?: number;
  offset?: number;
}

export interface formContextParam {
  labelCol?: colParam;
  wrapperCol?: colParam;
  initValues?: {
    [key: string]: any;
  };
  rulesError?: { [key: string]: string };
  setFieldValue?: Function;
  handleFinish?: Function;
}


export type rulesParam = requiredParam | lenParam | minParam | maxParam | patternParam;

export interface requiredParam {
  required: boolean;
  message: string;
}

interface lenParam {
  len: number;
  message: string;
}

interface minParam {
  min: number;
  message: string;
}

interface maxParam {
  max: number;
  message: string;
}

interface patternParam {
  pattern: RegExp;
  message: string;
}