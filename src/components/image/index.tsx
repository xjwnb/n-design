/*
 * @Author: your name
 * @Date: 2021-10-31 22:16:28
 * @LastEditTime: 2021-11-01 08:21:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\image\index.tsx
 */
// import {} from "react";
import style from "./index.module.scss";

interface IProps {
  alt?: string;
  width?: number;
  height?: number;
  src?: string;
}

export default function Image(Props: IProps) {
  const { alt, src, width, height } = Props;

  return (
    <div className={[`${style.n_image}`].join(" ")}>
      <img
        className={[`${style.n_image_img}`].join(" ")}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className={style.n_image_preview}>
        <span className={style.n_image_preview_text}>预览</span>
      </div>
    </div>
  );
}
