/*
 * @Author: your name
 * @Date: 2021-11-17 13:53:29
 * @LastEditTime: 2021-11-23 09:35:04
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
  useReducer,
  cloneElement,
  BaseSyntheticEvent,
} from "react";
// interface
import { formProps, formContextParam } from "./interface";
// style
import Style from "./index.module.scss";
// components
import { Row, Col, Button, Checkbox, Input, Select, Switch } from "../index";

const defaultFormContext: formContextParam = {
  labelCol: { span: 8, offset: 0 },
  wrapperCol: { span: 16, offset: 0 },
  initValues: {},
  setFieldValue: () => {},
  handleFinish: (value: object) => {},
};

const FormContext = createContext<formContextParam>(defaultFormContext);

// reducer
const initalState = {};

function formReducer(state: any, action: any) {
  switch (action.type) {
    case "edit":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const Form = function (Props: formProps) {
  const {
    children,
    labelCol = { span: 8, offset: 0 },
    wrapperCol = { span: 16, offset: 0 },
    initialValues = {},
    onFinish,
  } = Props;

  const [initVal, setinitVal] = useState<object>(initialValues);
  // const [formProvider, setformProvider] = useState<formContextParam>({});

  const [state, dispatch] = useReducer(formReducer, initalState);

  // console.log(children);
  useEffect(() => {
    let newChild = (children as any)?.filter((item: any) => {
      if (item.props.name) {
        return true;
      }
      return false;
    });

    // console.log(newChild);
    const defaultValue: any = {};
    newChild.forEach((item: any) => {
      if (![Checkbox, Switch].includes(item.props.children.type)) {
        defaultValue[item.props.name] = "";
      } else {
        console.log(item.props.name);
        defaultValue[item.props.name] = false;
      }
    });
    setinitVal({ ...defaultValue, ...initVal });
    dispatch({ type: "edit", payload: { ...defaultValue, ...initVal } });
    // eslint-disable-next-line
  }, [children]);

  /**
   * 点击表单提交按钮
   */
  const handleFinish = function () {
    onFinish && onFinish(state);
  };

  /**
   * 表单 form_value onChange 事件
   */
  const setFieldValue = function (key: string, value: any) {
    // console.log(initVal, key, value);
    dispatch({ type: "edit", payload: { [key]: value } });
    setinitVal({
      ...initVal,
      [key]: value,
    });
  };

  return (
    <div className={[Style.n_form].join(" ")}>
      <FormContext.Provider
        value={{
          labelCol,
          wrapperCol,
          initValues: initVal,
          // initValues: state,
          setFieldValue: setFieldValue,
          handleFinish: handleFinish,
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
  const [formValue, setformValue] = useState<any>("");

  // context
  const { labelCol, wrapperCol, initValues, setFieldValue, handleFinish } =
    useContext(FormContext);

  /**
   * 点击按钮
   */
  const handleSubmit = () => {
    handleFinish && handleFinish();
  };

  /**
   * 给按钮添加 props
   */
  const addPropsFromBtn = function () {
    if (children.type === Button && children.props.htmlType === "submit") {
      const newChild = cloneElement(children, {
        onClick: () => {
          handleSubmit();
        },
      });
      setnewChildren(newChild);
    }
  };

  useEffect(() => {
    addPropsFromBtn();
    // eslint-disable-next-line
  }, [initValues]);

  useEffect(() => {
    for (let key in initValues) {
      if (key === name) {
        initValues && key && setformValue(initValues[key] || "");
        if (children.type === Input) {
          setnewChildren(
            cloneElement(children, {
              value: initValues[name],
              onChange: function (event: BaseSyntheticEvent) {
                let val = event.target.value;
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
          break;
        } else if (children.type === Checkbox) {
          setnewChildren(
            cloneElement(children, {
              defaultChecked: Boolean(initValues[name]),
              onChange: function (e: BaseSyntheticEvent) {
                let val = e.target.checked;
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
          break;
        } else if (children.type === Input.Password) {
          setnewChildren(
            cloneElement(children, {
              value: initValues[name],
              onChange: function (event: BaseSyntheticEvent) {
                let val = event.target.value;
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
          break;
        } else if (children.type === Select) {
          setnewChildren(
            cloneElement(children, {
              defaultValue: name && initValues[name],
              onChange: function (val: string) {
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
        } else if (children.type === Switch) {
          setnewChildren(
            cloneElement(children, {
              defaultValue: name && Boolean(initValues[name]),
              onChange: function (val: boolean) {
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
        }
      } else {
        if (children.type === Input) {
          setnewChildren(
            cloneElement(children, {
              value: name && initValues[name],
              onChange: function (event: BaseSyntheticEvent) {
                let val = event.target.value;
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
          break;
        } else if (children.type === Checkbox) {
          setnewChildren(
            cloneElement(children, {
              defaultChecked: name && Boolean(initValues[name]),
              onChange: function (e: BaseSyntheticEvent) {
                let val = e.target.checked;
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
          break;
        } else if (children.type === Input.Password) {
          setnewChildren(
            cloneElement(children, {
              value: name && initValues[name],
              onChange: function (event: BaseSyntheticEvent) {
                let val = event.target.value;
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
          break;
        } else if (children.type === Select) {
          setnewChildren(
            cloneElement(children, {
              defaultValue: name && initValues[name],
              onChange: function (val: string) {
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
        } else if (children.type === Switch) {
          setnewChildren(
            cloneElement(children, {
              defaultValue: name && Boolean(initValues[name]),
              onChange: function (val: boolean) {
                setformValue(val);
                setFieldValue && setFieldValue(name, val);
              },
            })
          );
        }
      }
    }

    // eslint-disable-next-line
  }, [formValue, children]);

  useEffect(() => {
    addPropsFromBtn();
    // eslint-disable-next-line
  }, [formValue]);

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
