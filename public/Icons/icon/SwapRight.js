import * as React from "react";

function SvgSwapRight(props) {
  return (
    <svg
      className="swap-right_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M128 554.667A42.667 42.667 0 00128 640h752.213c38.656 0 57.387-47.317 29.184-73.813L682.112 352.853a42.667 42.667 0 10-58.41 62.294l148.693 139.52H128z"
      />
    </svg>
  );
}

export default SvgSwapRight;
