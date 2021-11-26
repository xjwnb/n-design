/*
 * @Author: your name
 * @Date: 2021-11-25 15:38:32
 * @LastEditTime: 2021-11-26 11:50:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\table\interface.ts
 */

import React from "react";


export interface IProps {
  columns: Array<ColumnParam>;
  dataSource: Array<{
    key: string | number;
    [key: string]: any
  }>;
  rowSelection?: RowSelectionParam;
}

export interface ColumnParam {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: any, record: object, index: number) => React.ReactNode;
}

export interface RowSelectionParam {
  type?: "checkbox" | "radio";
  onChange?: (selectedRowKeys: React.Key[], selectedRows: Array<{ [key: string]: any }>) => void;
}