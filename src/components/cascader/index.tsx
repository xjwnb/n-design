/*
 * @Author: your name
 * @Date: 2021-12-18 09:50:02
 * @LastEditTime: 2021-12-18 17:04:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\cascader\index.tsx
 */
import { useState, useEffect, useRef } from "react";
import "./index.scss";
import classnames from "classnames";
import { Bottom, Right } from "../../Icons/icon/index";

interface OptParam {
  label: string;
  value: string;
  // hasChild: boolean;
  children?: Array<OptionParam>;
}

interface OptionParam {
  value: string;
  label: string;
  children?: Array<OptionParam>;
}

interface IProps {
  placeholder?: string;
  width?: number | string;
  options?: Array<OptionParam>;

  onChange?: Function;
}

function Cascader(Props: IProps) {
  const { placeholder, width = 186, options = [], onChange } = Props;

  const [showContent, setshowContent] = useState(false);
  const [showBorder, setshowBorder] = useState(false);
  const [showShadow, setshowShadow] = useState(false);
  // firstOption
  const [firstOption, setfirstOption] = useState<Array<OptParam>>([]);
  const [otherOption, setotherOption] = useState<Array<any>>([]);
  const [selectValue, setselectValue] = useState<Array<string>>([]);
  const [inputValue, setinputValue] = useState("");

  // 整个组件 ref
  const cascaderRef = useRef<HTMLDivElement>(null);
  // input ref
  const inputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setfirstOption();
    if (options.length) {
      setfirstOption(getOptionArr(options));
    }
  }, [options]);

  useEffect(() => {
    if (showContent) {
      setshowBorder(true);
      setshowShadow(true);
    } else {
      setshowBorder(false);
      setshowShadow(false);
    }
  }, [showContent]);

  useEffect(() => {
    /**
     * 点击判断元素父元素
     */
    const isParentEle = function (
      targetEle: EventTarget | HTMLDivElement | PointerEvent | null,
      parentEle: HTMLDivElement | null
    ): any {
      if (!targetEle) return false;
      if (targetEle === parentEle) return true;
      if (
        targetEle === document.body ||
        targetEle === document.documentElement
      ) {
        return false;
      }
      return isParentEle((targetEle as HTMLElement)?.parentNode, parentEle);
    };
    document.body.addEventListener("click", (e: MouseEvent) => {
      const flag = isParentEle(e.target, cascaderRef.current);
      if (!flag) {
        setshowContent(false);
      }
    });
  }, []);

  useEffect(() => {
    inputContainerRef.current?.addEventListener("mousemove", () => {
      setshowBorder(true);
    });
    inputContainerRef.current?.addEventListener("mouseleave", () => {
      if (showContent) {
        setshowShadow(true);
        setshowBorder(true);
      } else {
        setshowBorder(false);
        setshowShadow(false);
      }
    });
  }, [showContent]);

  /**
   * 获取 option 数组
   */
  const getOptionArr = function (
    option: Array<OptionParam> | Array<OptParam>
  ): Array<OptParam> {
    return option.map((opt) => {
      const item: OptParam = {
        label: opt.label,
        value: opt.value,
        children: opt.children || [],
      };
      return item;
    });
  };

  /**
   * 点击 input
   */
  const handleInputClick = function () {
    setshowContent(!showContent);
  };

  /**
   * 点击选择 option
   */
  const handleSelectOption = function (opt: OptParam, index: number) {
    let nowSelectValue;
    let currentLabel = opt.label;
    let firstFilterLabel = firstOption.map((op) => op.label);
    if (firstFilterLabel.includes(currentLabel)) {
      opt.children && setotherOption([opt.children]);
      setselectValue([opt.value]);
    } else {
      let nowSelectOption = otherOption.slice(0, index);
      opt.children && nowSelectOption.push(opt.children);
      setotherOption(nowSelectOption);
      nowSelectValue = selectValue.splice(0, index);
      nowSelectValue.push(opt.value);
      setselectValue(nowSelectValue);
    }
    if (!opt.children) {
      setshowContent(false);
      nowSelectValue && setinputValue(nowSelectValue.join("/"));
      onChange?.(nowSelectValue);
    }
  };

  /**
   * 点击组件
   */
  const handleCascaderClick = function () {};

  return (
    <div
      className={classnames("n_cascader")}
      ref={cascaderRef}
      onClick={handleCascaderClick}
    >
      <div
        className={classnames("n_cascader_input_wrapper")}
        style={{
          width,
        }}
        ref={inputContainerRef}
      >
        <div
          className={classnames("n_cascader_input_container")}
          style={{
            border: showBorder ? "1px solid #1890ff" : "1px solid #D9D9D9",
            boxShadow: showShadow ? "0 0 2px #1890ff" : "",
          }}
          onClick={handleInputClick}
        >
          <span className={classnames("n_cascader_input")}>
            <input
              type="text"
              readOnly={true}
              placeholder={placeholder}
              value={inputValue}
            />
          </span>
          <span className={classnames("n_cascader_input_suffix_icon")}>
            <Bottom width={12} height={12} color="#C1C1C1" />
          </span>
        </div>
      </div>
      {/* content */}
      <div
        className={classnames("n_cascader_content_wrapper")}
        style={{
          display: showContent ? "block" : "none",
        }}
      >
        <div className={classnames("n_cascader_content_container")}>
          <div className={classnames("n_cascader_content")}>
            <div className={classnames("n_cascader_option_item")}>
              {firstOption.map((item) => (
                <div
                  key={item.value}
                  className={classnames(
                    "n_cascader_option_label",
                    selectValue.includes(item.value)
                      ? "n_cascader_option_label_active"
                      : ""
                  )}
                  onClick={() => handleSelectOption(item, 0)}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      display: item.children?.length ? "block" : "none",
                    }}
                  >
                    <Right width={12} height={12} color="#858585" />
                  </span>
                </div>
              ))}
            </div>
          </div>
          {otherOption?.map((item, index) => (
            <div key={index} className={classnames("n_cascader_content")}>
              <div className={classnames("n_cascader_option_item")}>
                {item?.map((it: OptionParam) => (
                  <div
                    key={it.value}
                    className={classnames(
                      "n_cascader_option_label",
                      selectValue.includes(it.value)
                        ? "n_cascader_option_label_active"
                        : ""
                    )}
                    onClick={() => handleSelectOption(it, index + 1)}
                  >
                    <span>{it.label}</span>
                    <span
                      style={{
                        display: it.children?.length ? "block" : "none",
                      }}
                    >
                      <Right width={12} height={12} color="#858585" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cascader;
