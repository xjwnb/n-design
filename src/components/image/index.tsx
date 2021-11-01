/*
 * @Author: your name
 * @Date: 2021-10-31 22:16:28
 * @LastEditTime: 2021-11-01 11:37:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\image\index.tsx
 */
import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./index.module.scss";

import PreviewContaine from "./components/previewContainer/index";

interface IProps {
  alt?: string;
  width?: number;
  height?: number;
  src?: string;
  title?: string;
  preview?: string;
  fallback?: string;
}

export default function Image(Props: IProps) {
  const { alt, src, width, height, title, preview = true, fallback } = Props;

  const [visabled, setvisabled] = useState<boolean>(false);
  const [isError, setisError] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imageDom = document.createElement("img");
    imageDom.src = src || "";
    imageDom.onload = function () {
      setisError(false);
    };
    imageDom.onerror = function () {
      setisError(true);
    };
  }, [src]);

  /**
   * 点击预览
   */
  const handleClickPreview = function () {
    setvisabled(true);
  };

  /**
   * 关闭预览
   */
  const handleClosePreview = function () {
    setvisabled(false);
  };

  return (
    <div className={[`${style.n_image}`].join(" ")}>
      <img
        className={[`${style.n_image_img}`].join(" ")}
        src={!isError ? src : fallback}
        alt={alt}
        width={width}
        height={height}
        title={title}
        ref={imgRef}
      />
      {preview && !isError && (
        <div className={style.n_image_preview}>
          <span
            className={style.n_image_preview_text}
            onClick={handleClickPreview}
          >
            预览
          </span>
        </div>
      )}

      {/* 预览 - 待删除 */}
      {visabled &&
        ReactDOM.createPortal(
          <PreviewContaine onClose={handleClosePreview} src={src} />,
          document.body || document.documentElement
        )}
    </div>
  );
}
