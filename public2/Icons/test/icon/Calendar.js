import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg
      className="calendar_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#333"
        d="M896 448H128v447.957l477.739.022L896 895.957V448zm0-42.667v-213.29C896 192 768 192 768 192v-42.667h128.043a42.667 42.667 0 0142.624 42.71v703.914a42.624 42.624 0 01-42.603 42.71H127.936a42.667 42.667 0 01-42.603-42.71V192.043c0-23.574 18.923-42.71 42.624-42.71H256V192l-128 .043v213.29h768zm-597.333-320h42.666V256h-42.666V85.333zm384 0h42.666V256h-42.666V85.333zm-298.667 64h256V192H384v-42.667z"
      />
    </svg>
  );
}

export default SvgCalendar;
