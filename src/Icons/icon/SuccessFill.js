import * as React from "react";

function SvgSuccessFill(props) {
  return (
    <svg
      className="success_fill_svg__icon"
      width={16}
      height={16}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={props.color ?? "#333"}
        d="M666.272 472.288l-175.616 192a31.904 31.904 0 01-23.616 10.4h-.192A32 32 0 01443.168 664l-85.728-96a32 32 0 1147.744-42.624l62.144 69.6L619.04 429.088a32 32 0 1147.232 43.2m-154.24-344.32C300.224 128 128 300.32 128 512c0 211.776 172.224 384 384 384 211.68 0 384-172.224 384-384 0-211.68-172.32-384-384-384"
      />
    </svg>
  );
}

export default SvgSuccessFill;
