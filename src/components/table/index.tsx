/*
 * @Author: your name
 * @Date: 2021-11-25 15:35:50
 * @LastEditTime: 2021-11-25 16:55:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\table\index.tsx
 */
// style
import Style from "./index.module.scss";
// interface
import { IProps } from "./interface";
// icon
import { BoxEmpty } from "../../Icons/icon/index";

function Table(Props: IProps) {
  const { columns, dataSource = [] } = Props;

  console.log(columns);

  return (
    <div className={Style.n_table_wrapper}>
      {/* content */}
      <div className={[Style.n_table_content].join(" ")}>
        {/* table */}
        <table className={[Style.n_table].join(" ")}>
          {/* thead */}
          <thead>
            <tr>
              {columns.map((item) => (
                <th key={item.key}>{item.title}</th>
              ))}
            </tr>
          </thead>
          {/* tbody */}
          <tbody className={Style.n_table_tbody}>
            {dataSource?.map((item, index) => (
              <tr key={index}>
                {columns.map((col) => {
                  if (col.render) {
                    return (
                      <td key={`${col.key}${Math.random() * (10000 - 1) + 1}`}>
                        {col.render(item[col.dataIndex], item, index)}
                      </td>
                    );
                  } else {
                    return (
                      <td key={`${col.key}${Math.random() * (10000 - 1) + 1}`}>
                        {item[col.dataIndex]}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
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
    </div>
  );
}

export default Table;
