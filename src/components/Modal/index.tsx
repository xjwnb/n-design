/*
 * @Author: your name
 * @Date: 2021-12-09 16:36:41
 * @LastEditTime: 2021-12-09 16:49:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\Modal\index.tsx
 */
import Style from "./index.module.scss";

interface IProps {

}

function Modal (Props: IProps) {

  return (
    <div className={Style.n_modal_root}>
      Modal
      <div className={Style.n_modal_mask}></div>
      <div className={Style.n_modal_wrap}>
        <div className={Style.n_modal}>

        </div>
      </div>
    </div>
  )
}

export default Modal;