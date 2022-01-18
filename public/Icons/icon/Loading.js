import * as React from "react";
import "./loading.scss";

function SvgLoading(props) {
  return (
    <svg
      className="loading_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M512 0a512 512 0 01512 512h-64A448 448 0 00512 64V0z"
      />
    </svg>
  );
}

export default SvgLoading;
