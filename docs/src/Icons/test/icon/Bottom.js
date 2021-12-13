import * as React from "react";

function SvgBottom(props) {
  return (
    <svg
      className="bottom_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#333"
        d="M533.931 739.588c-12.692 12.692-33.187 12.774-45.778.185L74.383 326c-12.592-12.591-12.509-33.087.183-45.779s33.188-12.774 45.779-.184L534.117 693.81c12.588 12.59 12.507 33.086-.186 45.778zm413.92-458.325c12.693 12.692 12.775 33.188.185 45.778L534.264 740.812c-12.59 12.591-33.086 12.508-45.779-.184-12.692-12.692-12.773-33.188-.184-45.779l413.771-413.77c12.592-12.59 33.088-12.508 45.78.184z"
      />
    </svg>
  );
}

export default SvgBottom;
