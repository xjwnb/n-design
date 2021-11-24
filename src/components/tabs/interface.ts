/*
 * @Author: your name
 * @Date: 2021-11-23 16:07:49
 * @LastEditTime: 2021-11-24 15:01:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\tabs\interface.ts
 */

export interface tabParam {
  id: string;
  text: string;
  disabled: boolean;
}

// context
export interface tabsContextParam {
  activeKey: string;
}