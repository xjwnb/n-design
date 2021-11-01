/*
 * @Author: your name
 * @Date: 2021-10-31 22:16:28
 * @LastEditTime: 2021-11-01 15:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\components\image\index.tsx
 */
import {
  useRef,
  useState,
  useEffect,
  useContext,
  ReactElement,
  createContext,
} from "react";
import ReactDOM from "react-dom";
import style from "./index.module.scss";

import PreviewContaine from "./components/previewContainer/index";

interface previewListerface {
  previewList: any[];
}

const defaultPreviewList: previewListerface = {
  previewList: [],
};

const PreviewList = createContext(defaultPreviewList);

interface IProps {
  alt?: string;
  width?: number;
  height?: number;
  src?: string;
  title?: string;
  preview?: string;
  fallback?: string;
  onError?: Function;
}

export default function Image(Props: IProps) {
  const {
    alt,
    src,
    width,
    height,
    title,
    preview = true,
    fallback,
    onError,
  } = Props;

  const [visabled, setvisabled] = useState<boolean>(false);
  const [isError, setisError] = useState<boolean>(false);
  const [srcList, setsrcList] = useState([
    {
      id: 1,
      src: "",
    },
  ]);
  const [currenIndex, setcurrenIndex] = useState(0);

  const { previewList } = useContext(PreviewList);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // console.log(previewList);
    previewList.length
      ? setsrcList(previewList)
      : setsrcList([
          {
            id: 1,
            src: src || "",
          },
        ]);
    setcurrenIndex(previewList.findIndex((item) => item.src === src));
  }, [previewList, src]);

  useEffect(() => {
    const imageDom = document.createElement("img");
    imageDom.src = src || "";
    imageDom.onload = function () {
      setisError(false);
    };
    imageDom.onerror = function (e) {
      setisError(true);
      onError && onError(e);
    };
  }, [src, onError]);

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
          <PreviewContaine
            onClose={handleClosePreview}
            src={srcList}
            currentIndex={currenIndex}
          />,
          document.body || document.documentElement
        )}
    </div>
  );
}

/**
 * PreviewGroup
 */

interface groupProps {
  children: Array<ReactElement>;
}

Image.PreviewGroup = function PreviewGroup(Props: groupProps) {
  const { children } = Props;

  // const [providerValue, setproviderValue] = useState({
  //   previewList: children.map((item, index) => {
  //     return {
  //       id: index,
  //       src: item.props.src,
  //     };
  //   }),
  // });

  useEffect(() => {
    // setproviderValue({
    //   previewList: children.map((item, index) => {
    //     return {
    //       id: index,
    //       src: item.props.src,
    //     };
    //   }),
    // });
  }, [children]);

  return (
    <PreviewList.Provider
      value={{
        previewList: children.map((item, index) => {
          return {
            id: index,
            src: item.props.src,
          };
        }),
      }}
    >
      {children.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </PreviewList.Provider>
  );
};
