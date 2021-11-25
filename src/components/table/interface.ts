/*
 * @Author: your name
 * @Date: 2021-11-25 15:38:32
 * @LastEditTime: 2021-11-25 15:39:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\table\interface.ts
 */


export interface IProps {
  columns: Array<columnParam>;
}

export interface columnParam {
  title: string;
  dataIndex: string;
  key: string;
  render?: Function;
}