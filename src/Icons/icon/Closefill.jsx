/*
 * @Author: your name
 * @Date: 2021-10-29 09:53:24
 * @LastEditTime: 2021-10-29 09:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\Icons\icon\Closefill.js
 */
import * as React from "react";

function SvgClosefill(props) {
  return (
    <svg
      className="closefill_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color || "#333"}
        d="M512 128c-211.2 0-384 172.8-384 384s172.8 384 384 384 384-172.8 384-384-172.8-384-384-384zm160 499.2c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L512 556.8 396.8 672c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8L467.2 512 352 396.8c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0L512 467.2 627.2 352c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L556.8 512 672 627.2z"
      />
    </svg>
  );
}

export default SvgClosefill;
