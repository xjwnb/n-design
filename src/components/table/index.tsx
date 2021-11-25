/*
 * @Author: your name
 * @Date: 2021-11-25 15:35:50
 * @LastEditTime: 2021-11-25 15:46:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\table\index.tsx
 */
// style
import Style from "./index.module.scss";
// interface
import { IProps } from "./interface";


function Table (Props: IProps) {
  const { columns } = Props;

  console.log(columns);

  return (
    <div className={Style.n_table}>

      {/* content */}
      <div className={[Style.n_table_content].join(" ")}>
        {/* table */}
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Table;