import * as React from "react";

function SvgClose(props) {
  return (
    <svg
      className="close_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#333"
        d="M544.448 499.2l284.576-284.576a32 32 0 00-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 00-45.248 45.248L453.952 499.2 169.376 783.776a32 32 0 0045.248 45.248L499.2 544.448l284.576 284.576a31.904 31.904 0 0045.248 0 32 32 0 000-45.248L544.448 499.2z"
      />
    </svg>
  );
}

export default SvgClose;
