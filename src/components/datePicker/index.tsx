/*
 * @Author: your name
 * @Date: 2021-12-03 15:13:35
 * @LastEditTime: 2021-12-03 16:12:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\datePicker\index.tsx
 */
// component
import { Input } from "../index";
// Style
import Style from "./index.module.scss";
// icon
import { Calendar } from "../../Icons/icon/index";

interface IProps {
  picker?: "date" | "week" | "month" | "year" | "quarter";

  onChange?: Function;
}

function DatePicker(Props: IProps) {
  const { picker = "date" } = Props;

  return (
    <div className={[Style.n_datePicker].join(" ")}>
      <Input suffix={<Calendar />} />
    </div>
  );
}

export default DatePicker;
