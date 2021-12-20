/*
 * @Author: your name
 * @Date: 2021-12-20 13:31:06
 * @LastEditTime: 2021-12-20 13:31:44
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\Icons\icon\BackTop.js
 */
import * as React from "react";

function SvgBackTop(props) {
  return (
    <svg
      className="back-top_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M511.565 358.4a12.762 12.762 0 00-9.6 3.878l-146.381 150.63a12.8 12.8 0 1018.368 17.844L499.2 401.856V729.6a12.8 12.8 0 0025.6 0V400.512l120.768 126.874a12.8 12.8 0 1018.547-17.652L523.827 362.381a12.774 12.774 0 00-10.547-3.917 12.954 12.954 0 00-1.715-.051zM512 1024C229.235 1024 0 794.765 0 512S229.235 0 512 0s512 229.235 512 512-229.235 512-512 512zM320 320h384a12.8 12.8 0 000-25.6H320a12.8 12.8 0 000 25.6z"
      />
    </svg>
  );
}

export default SvgBackTop;
