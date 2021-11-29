/*
 * @Author: your name
 * @Date: 2021-11-29 08:53:10
 * @LastEditTime: 2021-11-29 11:00:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\tooltip\index.tsx
 */

// style
import Style from "./index.module.scss";

interface IProps {
  children: any;
  title: string;
}

function Tooltip(Props: IProps) {
  const { children, title = "" } = Props;

  return (
    <div className={Style.n_tooltip}>
      <div className={Style.n_tooltip_content}>
        <span className={Style.n_tooltip_children}>{children}</span>
        <span className={Style.n_tooltip_title}>{title}</span>
      </div>
    </div>
  );
}

export default Tooltip;
