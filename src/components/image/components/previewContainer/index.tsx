/*
 * @Author: your name
 * @Date: 2021-11-01 10:13:47
 * @LastEditTime: 2021-11-01 11:23:11
 * @LastEditors: Please set LastEditors
 * @Description: 预览容器
 * @FilePath: \n-design\src\components\image\components\previewContainer\index.tsx
 */
import { useEffect, useState } from "react";
import {
  RotateLeft,
  RotateRight,
  Narrow,
  Enlarge,
  Close,
} from "../../../../Icons/icon/index";
import "./index.scss";

interface IProps {
  src?: string;
  onClose?: Function;
}

export default function PreviewContainer(Props: IProps) {
  const { src, onClose } = Props;

  const [scale, setscale] = useState<number>(1);
  const SCALE_MULTIPLE = 0.25;

  const [rotate, setrotate] = useState<number>(0);
  const ROTATE_MULTIPLE = 90;

  /**
   * 关闭
   */
  const handleClose = function () {
    onClose && onClose();
  };

  /**
   * 缩小
   */
  const handleNarrow = function () {
    if (scale === 0.25) return;
    setscale(scale - SCALE_MULTIPLE);
  };

  /**
   * 扩大
   */
  const handleEnlarge = function () {
    setscale(scale + SCALE_MULTIPLE);
  };

  /**
   * 向左旋转
   */
  const handleRotateLeft = function () {
    setrotate(rotate - ROTATE_MULTIPLE);
  };

  /**
   * 向右旋转
   */
  const handleRotateRight = function () {
    setrotate(rotate + ROTATE_MULTIPLE);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="preview_container">
      <img
        className="preview_img"
        src={src}
        alt=""
        style={{
          transform: `scale(${scale}) rotate(${rotate}deg)`,
        }}
      />
      <div className="preview_control">
        <ul className="preview_control_ul">
          <li className="preview_control_icon">
            <RotateLeft
              color="#fff"
              width={30}
              height={30}
              onClick={handleRotateLeft}
            />
          </li>
          <li className="preview_control_icon">
            <RotateRight
              color="#fff"
              width={30}
              height={30}
              onClick={handleRotateRight}
            />
          </li>
          <li className="preview_control_icon">
            <Narrow
              color="#fff"
              width={30}
              height={30}
              onClick={handleNarrow}
            />
          </li>
          <li className="preview_control_icon">
            <Enlarge
              color="#fff"
              width={30}
              height={30}
              onClick={handleEnlarge}
            />
          </li>
          <li className="preview_control_icon">
            <Close color="#fff" width={30} height={30} onClick={handleClose} />
          </li>
        </ul>
      </div>
      <div className="preview_aside_control"></div>
    </div>
  );
}
