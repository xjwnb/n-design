/*
 * @Author: your name
 * @Date: 2021-11-25 15:35:50
 * @LastEditTime: 2021-11-26 14:47:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\table\index.tsx
 */
import { BaseSyntheticEvent, useEffect, useState } from "react";
// style
import Style from "./index.module.scss";
// interface
import { IProps } from "./interface";
// icon
import { BoxEmpty } from "../../Icons/icon/index";
// components
import { Checkbox, Pagination } from "../index";

function Table(Props: IProps) {
  const { columns, dataSource = [], rowSelection = {} } = Props;

  const [defaultCheckbox, setDefaultCheckbox] = useState(false);
  const [indeterminate, setindeterminate] = useState(false);
  const [keyList, setkeyList] = useState([]);
  const [totalData, settotalData] = useState(dataSource.length);
  const [currenPage, setcurrenPage] = useState(1);
  const [currentData, setcurrentData] = useState<
    Array<{
      key: string | number;
      [key: string]: any;
    }>
  >([]);

  useEffect(() => {
    let data: Array<{
      key: string | number;
      [key: string]: any;
    }> = [];
    for (let i = 0; i < 10; i++) {
      dataSource[(currenPage - 1) * 10 + i] &&
        data.push(dataSource[(currenPage - 1) * 10 + i]);
    }
    setcurrentData(data);
  }, [currenPage, dataSource]);

  useEffect(() => {
    settotalData(dataSource.length);
  }, [dataSource]);

  /**
   * 分页 Pagination Change
   */
  const handlePaginationChange = function (
    current: number,
    defaultPageSize: number
  ) {
    console.log(current, defaultPageSize);
    setcurrenPage(current);
  };

  /**
   * checkbox 全选 onChange
   */
  const handleClickAllCheckbox = function (e: BaseSyntheticEvent) {
    // console.log(e);
    const currentDataKey = currentData.map((item) => item.key);

    if (!e.target.checked) {
      // setkeyList([]);
      setkeyList(keyList.filter((item) => !currentDataKey.includes(item)));
    } else {
      setkeyList(
        Array.from(new Set(keyList.concat(currentDataKey as never[])))
      );
    }
  };

  /**
   * onChange row chekcbox 传入选中行数据
   */
  const handleClickRowCheckboxSecond = function (item: any) {
    console.log(item);
    // setkeyList()
    if (keyList.every((it) => it !== item.key)) {
      setkeyList(Array.from(new Set(keyList.concat(item.key))));
    } else {
      setkeyList(Array.from(new Set(keyList.filter((it) => it !== item.key))));
    }
  };

  /**
   *  onChange row checkbox
   */
  const handleClickRowCheckbox = function (e: BaseSyntheticEvent) {
    // console.log(e);
    /* if (e.target.checked) {
      setindeterminate(true);
    } */
  };

  useEffect(() => {
    if (!currentData.length) return;
    const currentDataKey = currentData.map((item) => item.key);
    let currenDataSelectKey: Array<string | number> = [];
    let flag = currentDataKey.every((item) => {
      if (keyList.includes(item as never)) {
        currenDataSelectKey.push(item);
      }
      return keyList.includes(item as never);
    });
    console.log(flag, currentDataKey, currenDataSelectKey, keyList);
    if (flag && currenDataSelectKey.length === currentData.length) {
      setindeterminate(false);
      setDefaultCheckbox(true);
      return;
    }
    if (currenDataSelectKey.length) {
      setindeterminate(true);
      setDefaultCheckbox(false);
      return;
    }

    if (!currenDataSelectKey.length) {
      setindeterminate(false);
      setDefaultCheckbox(false);
      return;
    }
  }, [keyList, currentData, defaultCheckbox, indeterminate]);

  return (
    <div className={Style.n_table_wrapper}>
      {/* content */}
      <div className={[Style.n_table_content].join(" ")}>
        {/* table */}
        <table className={[Style.n_table].join(" ")}>
          {/* thead */}
          <thead>
            <tr>
              {Object.keys(rowSelection).includes("type") &&
              rowSelection["type"] === "checkbox" ? (
                <th
                  style={{
                    width: 30,
                  }}
                >
                  <Checkbox
                    indeterminate={indeterminate}
                    defaultChecked={defaultCheckbox}
                    onChange={handleClickAllCheckbox}
                  />
                </th>
              ) : (
                ""
              )}
              {columns.map((item) => (
                <th key={item.key}>{item.title}</th>
              ))}
            </tr>
          </thead>
          {/* tbody */}
          <tbody className={Style.n_table_tbody}>
            {currentData.length &&
              currentData?.map(
                (
                  item: {
                    key: string | number;
                    [key: string]: any;
                  },
                  index: number
                ) => {
                  return (
                    <tr key={index}>
                      {
                        // rowSelection &&
                        Object.keys(rowSelection).includes("type") &&
                        rowSelection["type"] === "checkbox" ? (
                          <td>
                            <Checkbox
                              defaultChecked={keyList.includes(
                                item.key as never
                              )}
                              onChange={(e: BaseSyntheticEvent) => {
                                handleClickRowCheckbox(e);
                                handleClickRowCheckboxSecond(item);
                              }}
                            />
                          </td>
                        ) : (
                          ""
                        )
                      }
                      {columns.map((col) => {
                        if (col.render) {
                          return (
                            <td
                              // key={`${col.key}${Math.random() * (10000 - 1) + 1}`}
                              key={Math.random() * (10000 - 1) + 1}
                            >
                              {col.render(item[col.dataIndex], item, index)}
                            </td>
                          );
                        } else {
                          return (
                            <td
                              // key={`${col.key}${Math.random() * (10000 - 1) + 1}`}
                              key={Math.random() * (10000 - 1) + 1}
                            >
                              {item[col.dataIndex]}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
        {/* empty */}
        {dataSource.length === 0 && (
          <div className={Style.n_table_empty_wrapper}>
            <div className={Style.n_table_empty_icon}>
              <BoxEmpty color={"#f0f0f0"} />
            </div>
            <div className={Style.n_table_empty_text}>数据为空</div>
          </div>
        )}
      </div>

      <Pagination total={totalData} onChange={handlePaginationChange} />
    </div>
  );
}

export default Table;
