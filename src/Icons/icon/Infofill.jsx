import * as React from "react";

function SvgInfofill(props) {
  return (
    <svg
      className="infofill_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color || "#333"}
        d="M512 65.984C266.048 65.984 65.984 266.048 65.984 512S266.048 958.016 512 958.016 958.016 757.952 958.016 512 757.952 65.984 512 65.984zM544 736c0 17.696-14.304 32-32 32s-32-14.304-32-32V448c0-17.696 14.304-32 32-32s32 14.304 32 32v288zm-32-384c-26.496 0-48-21.536-48-48 0-26.528 21.504-48 48-48s48 21.472 48 48c0 26.464-21.504 48-48 48z"
      />
    </svg>
  );
}

export default SvgInfofill;
