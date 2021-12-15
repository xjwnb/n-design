/*
 * @Author: your name
 * @Date: 2021-11-17 13:53:29
 * @LastEditTime: 2021-12-15 10:00:14
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
import {
  formProps,
  formContextParam,
  rulesParam,
  requiredParam,
  rulesErrorParam,
} from "./interface";
// style
import Style from "./index.module.scss";
// components
import { Row, Col, Button, Checkbox, Input, Select, Switch } from "../../index";
import Radio from "../radio";

const defaultFormContext: formContextParam = {
  labelCol: { span: 8, offset: 0 },
  wrapperCol: { span: 16, offset: 0 },
  initValues: {},
  rulesError: [],
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
    children = [],
    labelCol = { span: 8, offset: 0 },
    wrapperCol = { span: 16, offset: 0 },
    initialValues = {},
    onFinish,
    onFinishFailed,
  } = Props;

  const [initVal, setinitVal] = useState<object>(initialValues);
  const [ruleResult, setruleResult] = useState<Array<rulesErrorParam>>([]);

  const [state, dispatch] = useReducer(formReducer, initalState);

  useEffect(() => {
    let newChild = (children as any)?.filter((item: any) => {
      if (item.props.name) {
        return true;
      }
      return false;
    });

    const defaultValue: any = {};
    newChild.forEach((item: any) => {
      if (![Checkbox, Switch].includes(item.props.children.type)) {
        defaultValue[item.props.name] = "";
      } else {
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
    let rules = {};
    for (let i = 0; i < children.length; i++) {
      if (children[i].props.rules) {
        rules = {
          ...rules,
          [children[i].props.name]: children[i].props.rules,
        };
      }
    }
    let { flag, result } = formDataValidate(state, rules);
    if (flag) {
      onFinish && onFinish(state);
    } else {
      let res = result.map((item) => {
        return {
          ...item,
          errors: item.errors?.filter((it) => it !== ""),
        };
      });
      onFinishFailed && onFinishFailed(res);
    }
  };

  /**
   * 表单规则校验
   */
  const formDataValidate = function (
    formData: { [key: string]: any },
    rules: any
  ) {
    let result: { [key: string]: Array<string> } = {};
    Object.keys(rules).forEach((key: string) => {
      let val = formData[key];
      let rule = rules[key];
      for (let i = 0; i < rule.length; i++) {
        for (let ruleKey in rule[i]) {
          if (!result[key]) result[key] = [];
          if (ruleKey !== "message") {
            switch (ruleKey) {
              case "required":
                if (rule[i].required) {
                  result[key].push(String(val).length ? "" : rule[i].message);
                }
                break;
              case "len":
                if (val instanceof Array) {
                  result[key].push(
                    val.length < rule[i].len ? rule[i].message : ""
                  );
                } else {
                  result[key].push(
                    String(val).length < rule[i].len ? rule[i].message : ""
                  );
                }
                break;
              case "max":
                if (val instanceof Array) {
                  result[key].push(
                    val.length > rule[i].max ? rule[i].message : ""
                  );
                } else {
                  result[key].push(
                    String(val).length > rule[i].max ? rule[i].message : ""
                  );
                }
                break;
              case "min":
                if (val instanceof Array) {
                  result[key].push(
                    val.length < rule[i].min ? rule[i].message : ""
                  );
                } else {
                  result[key].push(
                    String(val).length < rule[i].min ? rule[i].message : ""
                  );
                }
                break;
              case "pattern":
                rule[i].pattern.lastIndex = 0;
                result[key].push(
                  rule[i].pattern.test(val) ? "" : rule[i].message
                );
                break;
              default:
                break;
            }
          }
        }
      }
    });
    let nowResult: Array<rulesErrorParam> = [];
    for (let key in result) {
      nowResult.push({
        name: key,
        errors: result[key].filter((item) => item !== ""),
      });
    }
    setruleResult(nowResult);
    return {
      flag: Object.values(result).every((item) => item.join("") === ""),
      result: nowResult,
    };
  };

  /**
   * 表单 form_value onChange 事件
   */
  const setFieldValue = function (key: string, value: any) {
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
          rulesError: ruleResult,
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
  rules?: Array<rulesParam>;
  children: ReactElement;
}

function Item(Props: itemProps) {
  const { children, label, name, rules = [] } = Props;

  const [newChildren, setnewChildren] = useState<any>(null);
  const [formValue, setformValue] = useState<any>("");
  const [required, setrequired] = useState<boolean>(false);
  const [errorMsg, seterrorMsg] = useState("");

  // context
  const {
    labelCol,
    wrapperCol,
    initValues,
    rulesError,
    setFieldValue,
    handleFinish,
  } = useContext(FormContext);

  useEffect(() => {
    let rule = rulesError?.filter((item) => item.name === name);
    let msg = "";
    if (rule?.length) {
      msg = (rule[0].errors?.length && rule[0].errors[0]) || "";
    }
    seterrorMsg(msg);
  }, [rulesError, name]);

  useEffect(() => {
    let requiredVal = false;
    for (let i = 0; i < rules?.length; i++) {
      for (let key in rules[i]) {
        if (key === "required") {
          requiredVal = (rules[i] as requiredParam).required;
        }
      }
    }

    setrequired(requiredVal);
  }, [rules]);

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
        } else if (children.type === Radio.Group) {
          setnewChildren(
            cloneElement(children, {
              value: name && initValues[name],
              onChange: function (val: string | number) {
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
        } else if (children.type === Radio.Group) {
          setnewChildren(
            cloneElement(children, {
              value: name && initValues[name],
              onChange: function (val: string | number) {
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
            {required && <span className={Style.n_form_item_required}>*</span>}
            {label && (
              <label className={Style.n_form_item_label}>{label}</label>
            )}
          </div>
        </Col>
        <Col span={wrapperCol?.span || 16} offset={wrapperCol?.offset || 0}>
          <div className={Style.n_form_item_content}>{newChildren}</div>
          <span className={Style.n_form_item_message}>{errorMsg}</span>
        </Col>
      </Row>
    </div>
  );
}

Form.Item = Item;

export default Form;
