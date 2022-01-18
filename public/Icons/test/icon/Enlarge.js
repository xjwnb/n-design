import * as React from "react";

function SvgEnlarge(props) {
  return (
    <svg
      className="enlarge_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#333"
        d="M919.264 905.984L780.352 767.072C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0045.248 0 32 32 0 00.032-45.248zM128 480c0-194.08 157.92-352 352-352s352 157.92 352 352-157.92 352-352 352-352-157.92-352-352zm497.792-32H512V336a32 32 0 00-64 0v112H336a32 32 0 000 64h112v112a32 32 0 1064 0V512h113.792a32 32 0 100-64z"
      />
    </svg>
  );
}

export default SvgEnlarge;
