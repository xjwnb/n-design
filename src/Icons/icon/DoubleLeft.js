/*
 * @Author: your name
 * @Date: 2021-12-03 16:49:05
 * @LastEditTime: 2021-12-04 17:26:42
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\Icons\icon\DoubleLeft.js
 */
import * as React from "react";

function SvgDoubleLeft(props) {
  return (
    <svg
      className="double-left_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M527.474 494.364l265.273-216.348a28.444 28.444 0 10-35.954-44.032L465.579 471.438a28.444 28.444 0 00-.854 43.35L755.94 772.267A28.444 28.444 0 10793.6 729.6L527.474 494.364zm-284.445 0l265.273-216.348a28.444 28.444 0 10-35.954-44.032L181.134 471.438a28.444 28.444 0 00-.853 43.35l291.214 257.479a28.444 28.444 0 1037.66-42.667L243.03 494.364z"
      />
    </svg>
  );
}

export default SvgDoubleLeft;
