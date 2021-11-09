/*
 * @Author: your name
 * @Date: 2021-11-05 15:06:14
 * @LastEditTime: 2021-11-09 09:51:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\pagination\index.tsx
 */
import { useEffect, useState, MouseEventHandler } from "react";
import Style from "./index.module.scss";
import { Left, Right } from "../../Icons/icon/index";

interface IProps {
  defaultPageSize?: number;
  defaultCurrent?: number;
  total: number;
  disabled?: boolean;

  onChange?: Function;
}

function Pagination(Props: IProps) {
  const {
    defaultPageSize = 10,
    total = 0,
    defaultCurrent = 1,
    disabled = false,
    onChange,
  } = Props;

  const [lastPage, setlastPage] = useState<number>(1);
  const [otherPageArr, setotherPageArr] = useState<Array<any>>([]);
  const [currentPage, setcurrentPage] = useState(defaultCurrent);

  useEffect(() => {}, []);

  useEffect(() => {
    setlastPage(Math.ceil(total / defaultPageSize) || 1);
  }, [defaultPageSize, total]);

  useEffect(() => {
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
        arr.unshift(arr[0] - 1);
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
    onChange && onChange(currentPage, defaultPageSize);
    // eslint-disable-next-line
  }, [currentPage]);

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

  return (
    <div className={[Style.n_pagination].join(" ")}>
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
