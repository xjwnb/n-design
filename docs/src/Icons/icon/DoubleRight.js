import * as React from "react";

function SvgDoubleRight(props) {
  return (
    <svg
      className="double-right_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M474.852 522.809L209.579 306.46a28.444 28.444 0 1135.953-44.032l291.272 237.455a28.444 28.444 0 01.796 43.349l-291.214 257.48a28.444 28.444 0 01-37.66-42.668L474.851 522.81zm284.444 0L494.023 306.46a28.444 28.444 0 1135.954-44.032l291.271 237.455a28.444 28.444 0 01.796 43.349L530.83 800.712a28.444 28.444 0 01-37.66-42.668L759.296 522.81z"
      />
    </svg>
  );
}

export default SvgDoubleRight;
