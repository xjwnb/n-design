/*
 * @Author: your name
 * @Date: 2021-11-17 13:53:29
 * @LastEditTime: 2021-11-19 15:56:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\form\index.tsx
 */
import { ReactElement, createContext, useContext } from "react";
// interface
import { formProps, formContextParam } from "./interface";

const defaultFormContext: formContextParam = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const FormContext = createContext<formContextParam>(defaultFormContext);

const Form = function (Props: formProps) {
  const { children, labelCol, wrapperCol } = Props;

  console.log(children);

  return (
    <div>
      <FormContext.Provider
        value={{
          labelCol,
          wrapperCol,
        }}
      >
        {children}
      </FormContext.Provider>
    </div>
  );
};

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

  // context
  const { labelCol, wrapperCol } = useContext(FormContext);

  console.log(children, ".......");
  console.log(labelCol, wrapperCol);

  return <div>
    {children}
  </div>;
}

Form.Item = Item;

export default Form;
