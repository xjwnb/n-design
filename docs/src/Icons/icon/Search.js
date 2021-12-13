import * as React from "react";

function SvgSearch(props) {
  return (
    <svg
      className="search_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M384 768C170.667 768 0 597.333 0 384S170.667 0 384 0s384 170.667 384 384-170.667 384-384 384zm0-682.667C217.6 85.333 85.333 217.6 85.333 384S217.6 682.667 384 682.667 682.667 550.4 682.667 384 550.4 85.333 384 85.333zM981.333 1024c-12.8 0-21.333-4.267-29.866-12.8L610.133 669.867c-17.066-17.067-17.066-42.667 0-59.734s42.667-17.066 59.734 0L1011.2 951.467c17.067 17.066 17.067 42.666 0 59.733-8.533 8.533-17.067 12.8-29.867 12.8z"
      />
    </svg>
  );
}

export default SvgSearch;
