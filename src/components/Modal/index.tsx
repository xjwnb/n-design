/*
 * @Author: your name
 * @Date: 2021-12-09 16:36:41
 * @LastEditTime: 2021-12-09 17:09:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\Modal\index.tsx
 */
import Style from "./index.module.scss";

interface IProps {
  visible: boolean;
  children: any;
}

function Modal(Props: IProps) {
  const { visible, children } = Props;
  

  return (
    <div
      className={Style.n_modal_root}
      style={{
        display: visible ? "block" : "none",
      }}
    >
      Modal
      <div className={Style.n_modal_mask}></div>
      <div className={Style.n_modal_wrap}>
        <div className={Style.n_modal}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
