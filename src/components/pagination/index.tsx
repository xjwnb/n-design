/*
 * @Author: your name
 * @Date: 2021-11-05 15:06:14
 * @LastEditTime: 2021-11-09 09:22:09
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
}

function Pagination(Props: IProps) {
  const { defaultPageSize = 10, total = 0, defaultCurrent = 1 } = Props;

  const [lastPage, setlastPage] = useState<number>(1);
  const [otherPageArr, setotherPageArr] = useState<Array<any>>([]);
  const [currentPage, setcurrentPage] = useState(defaultCurrent);

  useEffect(() => {}, []);

  useEffect(() => {
    // console.log(defaultPageSize);
    setlastPage(Math.ceil(total / defaultPageSize) || 1);
  }, [defaultPageSize, total]);

  // useEffect(() => {
  //   let otherPage = [];
  //   if (lastPage <= 6 && lastPage > 1) {
  //     console.log(lastPage);
  //     for (let i = 2; i < lastPage; i++) {
  //       otherPage.push(i);
  //     }
  //   } else {
  //     otherPage = currentPageAroundArr(currentPage, lastPage);
  //   }
  //   // console.log(otherPage);
  //   setotherPageArr(otherPage);
  // }, [currentPage, lastPage]);
  useEffect(() => {
    let otherPage: Array<number | string> = [];
    // if (currentPage + 2 < lastPage && currentPage - 2 < 1) {
    //   for (let i = 2; i < currentPage + 6; i++) {
    //     console.log(i);
    //     otherPage.push(i);
    //   }
    // }
    /* if (lastPage <= 6) {
      for (let i = 2; i < lastPage; i++) {
        otherPage.push(i);
      }
    }  */ /* else if (currentPage - 2 > 1 && currentPage + 2 < lastPage - 1) {
      otherPage.push("pre");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        otherPage.push(i);
      }
    } else if (currentPage <= 4 &&) {

    } */
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

  /**
   * 判断当前选中页面，为中心，周围5页的数组,总页面数量大于 6 的情况
   */
  const currentPageAroundArr = function (
    currentPage: number,
    lastPage: number
  ) {
    let otherArr: any[] = [];
    // if (currentPage >= 5 && lastPage <= 8) {
    //   otherArr = ["pre", 3, 4, 5];
    //   for (let i = 6; i < lastPage; i++) {
    //     otherArr.push(i);
    //   }
    // } else if (lastPage < 8) {
    //   for (let i = 2; i < lastPage; i++) {
    //     otherArr.push(i);
    //   }
    // }
    // console.log(otherArr);

    // // setotherPageArr(otherArr);
    // if (currentPage - 2 <= 1) return [];
    if (currentPage < 5) {
      for (let i = 2; i < 6; i++) {
        otherArr.push(i);
      }
    } else if (currentPage + 2 < lastPage) {
      for (let i = currentPage - 2; i < currentPage + 3; i++) {
        otherArr.push(i);
      }
    }
    console.log(otherArr);
    return otherArr;
  };

  /**
   * 点击页面
   */
  const handleClickPage = function (page: number) {
    console.log(page);
    setcurrentPage(page);
  };

  /**
   * pre ...
   */
  const handlePreClick = function () {
    if (currentPage === 1) return;
    setcurrentPage(currentPage - 1);
  };

  /**
   * next ...
   */
  const handleNextClick = function () {
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
        >
          <Left color={currentPage === 1 ? "#CFCFCF" : ""} />
        </PaginationButton>
        <PaginationButton
          onClick={() => handleClickPage(1)}
          defaultCurrent={currentPage}
        >
          1
        </PaginationButton>

        {otherPageArr.map((item, index) => {
          if (!isNaN(item)) {
            return (
              <PaginationButton
                onClick={() => handleClickPage(item)}
                key={item}
                defaultCurrent={currentPage}
              >
                {item}
              </PaginationButton>
            );
          } else if (item === "pre") {
            return (
              <PaginationButton key={item} onClick={() => handlePreClick()}>
                ...
              </PaginationButton>
            );
          } else if (item === "next") {
            return (
              <PaginationButton key={item} onClick={() => handleNextClick()}>
                ...
              </PaginationButton>
            );
          }
        })}

        {lastPage > 1 && (
          <PaginationButton
            onClick={() => handleClickPage(lastPage)}
            defaultCurrent={currentPage}
          >
            {lastPage}
          </PaginationButton>
        )}

        <PaginationButton
          lastPage={lastPage}
          defaultCurrent={currentPage}
          onClick={handleNextClick}
        >
          <Right color={currentPage === lastPage ? "#CFCFCF" : ""} />
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

  onClick?: MouseEventHandler<HTMLDivElement>;

  // onChangeCurrent?: Function;
}

function PaginationButton(Props: btnProps) {
  const { children, defaultCurrent, onClick: handleClick, lastPage } = Props;
  // console.log(defaultCurrent === 1 && children === Left, "\r");
  if (defaultCurrent === 1) {
    console.log(children?.type, Left);
  }
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
          (defaultCurrent === lastPage && children?.type === Right)
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
