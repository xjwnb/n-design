/*
 * @Author: your name
 * @Date: 2021-11-17 13:53:29
 * @LastEditTime: 2021-11-17 14:08:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\form\index.tsx
 */
import { ReactElement } from "react";

interface formProps {
  children?: ReactElement;
  onFinish?: Function;
}

const Form = function(Props: formProps) {
  const { children } = Props;

  console.log(children);

  return (
    <>
      {children}
    </>
  )
}



/**
 * Form.Item
 */
interface itemProps {
  label?: string;
  name?: string;
  children?: ReactElement;
}

function Item(Props: itemProps) {
  const { children } = Props;

  console.log(children,".......");

  return (
    <>
      {children}
    </>
  )
}

Form.Item = Item;


export default Form;