import * as React from "react";

function SvgFivePointedStar(props) {
  return (
    <svg
      className="five-pointed-star_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#333"
        d="M511.083 89.707l129.265 291.876 317.409 34.002L720.11 628.728 785.853 941.1 509.716 780.94 232.944 940.006l66.982-312.124L63.132 413.811l317.525-32.746L511.083 89.707z"
      />
    </svg>
  );
}

export default SvgFivePointedStar;
