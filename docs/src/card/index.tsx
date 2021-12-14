/*
 * @Author: your name
 * @Date: 2021-11-25 09:35:15
 * @LastEditTime: 2021-11-25 11:15:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\card\index.tsx
 */
import Style from "./index.module.scss";

interface IProps {
  children?: any;
  title?: string;
  extra?: any;
  style?: object;
  size?: "default" | "small";
  bordered?: boolean;
  cover?: any;
  hoverable?: boolean;
}

function Card(Props: IProps) {
  const {
    children,
    title,
    extra,
    style = {},
    size = "default",
    bordered = true,
    cover,
    hoverable = false,
  } = Props;

  return (
    <div
      className={[
        Style.n_card,
        size === "small" ? Style.n_card_small : "",
        bordered ? Style.n_card_bordered : "",
        hoverable ? Style.n_card_hoverable : "",
      ].join(" ")}
      style={{
        ...style,
      }}
    >
      {/* head */}
      {title || extra ? (
        <div className={Style.n_card_head}>
          <div className={Style.n_card_head_wrapper}>
            <div className={Style.n_card_head_title}>{title}</div>
            <div className={Style.n_card_head_extra}>{extra}</div>
          </div>
        </div>
      ) : (
        ""
      )}
      {cover && <div className={Style.n_card_cover}>{cover}</div>}

      {/* body */}
      <div className={Style.n_card_body}>{children}</div>
    </div>
  );
}

export default Card;
