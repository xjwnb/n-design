/*
 * @Author: your name
 * @Date: 2021-11-17 13:53:29
 * @LastEditTime: 2021-11-20 09:35:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\form\index.tsx
 */
import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
  cloneElement,
} from "react";
// interface
import { formProps, formContextParam } from "./interface";
// style
import Style from "./index.module.scss";
// components
import { Row, Col, Button } from "../index";

const defaultFormContext: formContextParam = {
  labelCol: { span: 8, offset: 0 },
  wrapperCol: { span: 16, offset: 0 },
  initValues: {},
};

const FormContext = createContext<formContextParam>(defaultFormContext);

const Form = function (Props: formProps) {
  const {
    children,
    labelCol = { span: 8, offset: 0 },
    wrapperCol = { span: 16, offset: 0 },
    initialValues = {},
  } = Props;

  // console.log(children);

  return (
    <div className={[Style.n_form].join(" ")}>
      <FormContext.Provider
        value={{
          labelCol,
          wrapperCol,
          initValues: initialValues,
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
  children: ReactElement;
}

function Item(Props: itemProps) {
  const { children, label, name } = Props;

  const [newChildren, setnewChildren] = useState<any>(null);
  const [formValue, setformValue] = useState("");

  // context
  const { labelCol, wrapperCol, initValues } = useContext(FormContext);

  console.log(initValues);

  const handleSubmit = function () {
    console.log("提交按钮");
  };

  useEffect(() => {
    // setnewChildren(cloneElement(children, { value: "123" }));

    if (children.type === Button) {
      console.log("有按钮....");
      const newChild = cloneElement(children, {
        onClick: handleSubmit,
      });
      setnewChildren(newChild);
    } else {
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    for (let key in initValues) {
      console.log(key);
      if (key === name) {
        initValues && key && setformValue(initValues[key] || "");
        setnewChildren(cloneElement(children, { value: formValue }));
        break;
      }
    }
    // if (
    //   name !== undefined &&
    //   initValues !== undefined &&
    //   initValues[name] !== undefined
    // ) {
    // }
  }, [initValues, name, formValue, children]);

  return (
    <div className={[Style.n_form_item].join(" ")}>
      <Row className={Style.n_form_item_row} align="middle">
        {/* label */}
        <Col
          className={Style.n_form_item_col}
          span={labelCol?.span || 8}
          offset={labelCol?.offset || 0}
        >
          <div className={Style.n_form_item_key}>
            {label && (
              <label className={Style.n_form_item_label}>{label}</label>
            )}
          </div>
        </Col>
        <Col span={wrapperCol?.span || 16} offset={wrapperCol?.offset || 0}>
          {newChildren}
        </Col>
      </Row>
    </div>
  );
}

Form.Item = Item;

export default Form;
