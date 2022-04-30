import * as React from "react";

function SvgWarningFill(props) {
  return (
    <svg
      className="warning_fill_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64zm32 672c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32zm0-128c0 17.7-14.3 32-32 32s-32-14.3-32-32V288c0-17.7 14.3-32 32-32s32 14.3 32 32v320z"
      />
    </svg>
  );
}

export default SvgWarningFill;
