/*
 * @Author: your name
 * @Date: 2021-11-05 15:06:14
 * @LastEditTime: 2021-11-22 08:43:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\pagination\index.tsx
 */
import React, {
  useEffect,
  useState,
  useCallback,
  MouseEventHandler,
} from "react";
import Style from "./index.module.scss";
import { Left, Right } from "../../Icons/icon/index";
// components
import { Select, Input } from "../index";

interface IProps {
  defaultPageSize?: number;
  defaultCurrent?: number;
  total: number;
  disabled?: boolean;
  showQuickJumper?: boolean;
  pageSizeOptions?: Array<number>;
  showTotal?: showTotalType;
  onChange?: Function;
  onShowSizeChange?: Function;
}

type showTotalType = (total: number) => string | React.ReactElement;

function Pagination(Props: IProps) {
  const {
    defaultPageSize = 10,
    total = 0,
    defaultCurrent = 1,
    disabled = false,
    showQuickJumper = false,
    pageSizeOptions = [10, 20, 50, 100],
    onChange,
    showTotal,
    onShowSizeChange,
  } = Props;

  const [lastPage, setlastPage] = useState<number>(1);
  const [otherPageArr, setotherPageArr] = useState<Array<any>>([]);
  const [currentPage, setcurrentPage] = useState(defaultCurrent);
  const [selectDefaultValue, setselectDefaultValue] = useState(
    pageSizeOptions[0]
  );
  const [selectOptions, setselectOptions] = useState<Array<any>>([]);
  const [pageSize, setpageSize] = useState(defaultPageSize);
  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    setlastPage(Math.ceil(total / pageSize) || 1);
  }, [pageSize, total]);

  useEffect(() => {
    if (currentPage > lastPage) return;
    let arr: any[] = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      arr.push(i);
    }
    let smallNum = 0;
    arr = arr.filter((item) => {
      if (item <= 1) {
        smallNum++;
        return false;
      }
      return true;
    });
    for (let i = 1; i <= smallNum; i++) {
      arr.push(arr[arr.length - 1] + 1);
    }
    smallNum = 0;
    if (arr[arr.length - 1] >= lastPage) {
      arr = arr.filter((item) => {
        if (item >= lastPage) {
          smallNum++;
          return false;
        }
        return true;
      });
      for (let i = 1; i <= smallNum; i++) {
        if (arr[0] - 1 > 1) {
          arr.unshift(arr[0] - 1);
        }
      }
    }
    arr = arr.filter((item) => !isNaN(item));
    if (arr[0] > 2) {
      arr.unshift("pre");
    }
    if (arr[arr.length - 1] < lastPage - 1) {
      arr.push("next");
    }
    setotherPageArr(arr);
  }, [currentPage, lastPage]);

  useEffect(() => {
    onChange && onChange(currentPage, pageSize);
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    setselectOptions(
      pageSizeOptions.map((item) => {
        return {
          value: String(item),
          children: `${item}条/页`,
        };
      })
    );
    // eslint-disable-next-line
  }, []);

  /**
   * 点击页面
   */
  const handleClickPage = function (page: number) {
    if (disabled) return;
    setcurrentPage(page);
  };

  /**
   * pre ...
   */
  const handlePreClick = function () {
    if (disabled) return;
    if (currentPage === 1) return;
    setcurrentPage(currentPage - 1);
  };

  /**
   * next ...
   */
  const handleNextClick = function () {
    if (disabled) return;
    if (currentPage === lastPage) return;
    setcurrentPage(currentPage + 1);
  };

  /**
   * 选择器 change
   */
  const handlePaginationSelectChange = useCallback(
    function (value: string) {
      let currentOption = selectOptions.find((item) => item.children === value);
      setpageSize(Number(currentOption?.value));
      setselectDefaultValue(Number(currentOption?.value));
      onShowSizeChange &&
        onShowSizeChange(Number(currentPage), Number(currentOption?.value));
      console.log("change");
      handleClickPage(1);
    },
    // eslint-disable-next-line
    [selectDefaultValue]
  );

  /**
   * 输入框 blur
   */
  const handleInputBlur = function () {
    if (!isNaN(Number(inputValue))) {
      setcurrentPage(Number(inputValue));
    } else {
      setinputValue("");
    }
  };

  /**
   * 输入框 change
   */
  const handleInputChange = function (value: string) {
    setinputValue(value);
  };

  return (
    <div className={[Style.n_pagination].join(" ")}>
      <div className={[Style.n_pagination_total].join(" ")}>
        {showTotal && showTotal(total)}
      </div>
      <div className={[Style.n_pagination_content].join(" ")}>
        <PaginationButton
          lastPage={lastPage}
          defaultCurrent={currentPage}
          onClick={handlePreClick}
          disabled={disabled}
        >
          <Left color={currentPage === 1 || disabled ? "#CFCFCF" : ""} />
        </PaginationButton>
        <PaginationButton
          onClick={() => handleClickPage(1)}
          defaultCurrent={currentPage}
          disabled={disabled}
        >
          1
        </PaginationButton>

        {otherPageArr.length > 0 &&
          otherPageArr?.map((item, index) => {
            if (item === "pre") {
              return (
                <PaginationButton
                  disabled={disabled}
                  key={item}
                  onClick={() => handlePreClick()}
                >
                  ...
                </PaginationButton>
              );
            } else if (item === "next") {
              return (
                <PaginationButton
                  disabled={disabled}
                  key={item}
                  onClick={() => handleNextClick()}
                >
                  ...
                </PaginationButton>
              );
            } else {
              return (
                <PaginationButton
                  onClick={() => handleClickPage(item)}
                  key={item}
                  defaultCurrent={currentPage}
                  disabled={disabled}
                >
                  {item}
                </PaginationButton>
              );
            }
          })}

        {lastPage > 1 && (
          <PaginationButton
            onClick={() => handleClickPage(lastPage)}
            defaultCurrent={currentPage}
            disabled={disabled}
          >
            {lastPage}
          </PaginationButton>
        )}

        <PaginationButton
          lastPage={lastPage}
          defaultCurrent={currentPage}
          onClick={handleNextClick}
          disabled={disabled}
        >
          <Right
            color={currentPage === lastPage || disabled ? "#CFCFCF" : ""}
          />
        </PaginationButton>
      </div>

      {/* showQuickJumper */}
      {showQuickJumper && (
        <div className={[Style.n_pagination_quickJumper].join(" ")}>
          <div className={[Style.n_pagination_quickJumper_select].join(" ")}>
            <Select
              defaultValue={String(selectDefaultValue)}
              style={{
                width: 122,
              }}
              onChange={handlePaginationSelectChange}
            >
              {selectOptions.map((item) => {
                return (
                  <Select.Option value={item.value} key={item.value}>
                    {item.children}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          <span className={[Style.n_pagination_quickJumper_text].join(" ")}>
            跳转
          </span>
          <div className={[Style.n_pagination_quickJumper_input].join(" ")}>
            <Input
              onBlur={handleInputBlur}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <span className={[Style.n_pagination_quickJumper_text].join(" ")}>
            页
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * 分页按钮小组件
 */
interface btnProps {
  children: any;
  defaultCurrent?: number;
  lastPage?: number;
  disabled?: boolean;

  onClick?: MouseEventHandler<HTMLDivElement>;
}

function PaginationButton(Props: btnProps) {
  const {
    children,
    defaultCurrent,
    onClick: handleClick,
    lastPage,
    disabled = false,
  } = Props;

  return (
    <div
      className={[
        Style.n_pagination_button,
        `${
          defaultCurrent === Number(children)
            ? Style.n_pagination_button_active
            : ""
        }`,
        `${
          (defaultCurrent === 1 && children?.type === Left) ||
          (defaultCurrent === lastPage && children?.type === Right) ||
          disabled
            ? Style.n_pagination_button_disabled
            : ""
        }`,
      ].join(" ")}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default Pagination;
