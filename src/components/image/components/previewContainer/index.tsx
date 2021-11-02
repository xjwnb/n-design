import { useEffect, useState } from "react";
import {
  RotateLeft,
  RotateRight,
  Narrow,
  Enlarge,
  Close,
  Left,
  Right,
} from "../../../../Icons/icon/index";
import "./index.scss";

interface IProps {
  src: Array<{ id: number; src: string }>;
  currentIndex?: number;
  onClose?: Function;
}

export default function PreviewContainer(Props: IProps) {
  const { src, currentIndex = 0, onClose } = Props;

  const [scale, setscale] = useState<number>(1);
  const SCALE_MULTIPLE = 0.25;

  const [rotate, setrotate] = useState<number>(0);
  const ROTATE_MULTIPLE = 90;

  const [index, setindex] = useState(currentIndex);

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

  /**
   * 左边一张
   */
  const handleLeft = function () {
    index !== 0 && setindex(index - 1);
  };

  /**
   * 右边一张
   */
  const handleRight = function () {
    index < src.length - 1 && setindex(index + 1);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    };
  }, [src]);

  return (
    <div className="preview_container">
      <img
        className="preview_img"
        src={src[index].src}
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
      {src.length > 1 && (
        <div className="preview_aside_control">
          <div
            className={[
              "preview_aside_icon",
              `${index === 0 ? "preview_aside_icon_disabled" : ""}`,
            ].join(" ")}
            onClick={handleLeft}
          >
            <Left color="#fff" width={30} height={30} />
          </div>
          <div
            className={[
              "preview_aside_icon",
              `${
                index === src.length - 1 ? "preview_aside_icon_disabled" : ""
              }`,
            ].join(" ")}
            onClick={handleRight}
          >
            <Right color="#fff" width={30} height={30} />
          </div>
        </div>
      )}
    </div>
  );
}
