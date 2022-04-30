import * as React from "react";

function SvgErrorFill(props) {
  return (
    <svg
      className="error-fill_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color || "#333"}
        d="M512 512zm0-499.858C235.936 12.142 12.142 235.937 12.142 512S235.936 1011.858 512 1011.858 1011.858 788.064 1011.858 512 788.064 12.142 512 12.142zM789.168 716.81l-72.36 72.359L512 584.359 307.19 789.168l-72.359-72.36L439.641 512 234.832 307.19l72.36-72.359L512 439.641l204.81-204.81 72.359 72.36L584.359 512l204.809 204.81z"
      />
    </svg>
  );
}

export default SvgErrorFill;
