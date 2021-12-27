/*
 * @Author: your name
 * @Date: 2021-12-27 10:38:00
 * @LastEditTime: 2021-12-27 16:21:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\progress\index.tsx
 */
import React, { useState, useEffect, useRef } from "react";
import { ErrorFill, SuccessFill } from "../../Icons/icon/index";
import Style from "./index.module.scss";

const colorMap = {
  active: "#1890ff",
  exception: "#ff4d4f",
  success: "#52c41a",
};

const strokeColor = "#F5F5F5";

interface IProps {
  percent?: number;
  type?: "line" | "circle";
  showInfo?: boolean;
  size?: "small" | "normal";
  status?: "active" | "exception" | "success";
  width?: number;
}

function Progress(Props: IProps) {
  const {
    percent = 0,
    type = "line",
    showInfo = true,
    size = "normal",
    status = "active",
    width = 120,
  } = Props;

  const [statusVal, setstatusVal] = useState(status);

  const CanvaseRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (percent === 100) {
      setstatusVal("success");
    }

    if (status === "exception") {
      setstatusVal("exception");
    }
  }, [percent, status]);

  useEffect(() => {
    /**
     * 圆的 class
     */
    class CircleProgress {
      wid = width - width / 8;
      percent = percent;
      radius = this.wid / 2;
      lineWidth = this.wid / 9;
      innerStyle = colorMap[statusVal];
      strokeStyle = strokeColor;
      lineCap = "round";
      startAngle = 0;
      //  || 3*Math.PI/2;

      outerDraw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(
          this.radius + 6,
          this.radius + 7,
          this.radius,
          0,
          Math.PI * 2,
          true
        );
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
      }

      innerDraw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        let anglePerSec = (2 * Math.PI) / (100 / this.percent);
        ctx.arc(
          this.radius + 6,
          this.radius + 7,
          this.radius,
          0,
          anglePerSec,
          false
        );
        ctx.strokeStyle = this.innerStyle;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.closePath();
      }

      draw(ctx: CanvasRenderingContext2D) {
        this.outerDraw(ctx);
        this.innerDraw(ctx);
        this.fillText(percent, ctx);
      }

      fillText(text: number | string, ctx: CanvasRenderingContext2D) {
        this.clearPath(ctx);
        switch (statusVal) {
          case "success":
            this.drawSuccessIcon(ctx);
            break;
          case "exception":
            this.drawErrorIcon(ctx);
            break;
          case "active":
            if (percent !== 100) {
              ctx.font = `${width / 2 / 2.3}px serif`;
              ctx.fillText(
                `${text}%`,
                width / 2 - 12,
                width / 2 + 10,
                width - 0
              );
            }
            break;
        }
      }

      drawErrorIcon(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(width / 2 - 10, width / 2 - 10);
        ctx.lineTo(width / 2 + 10, width / 2 + 10);
        ctx.moveTo(width / 2 + 10, width / 2 - 10);
        ctx.lineTo(width / 2 - 10, width / 2 + 10);
        ctx.closePath();
        ctx.stroke();
      }

      drawSuccessIcon(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(width / 2 - 5, width / 2);
        ctx.lineTo(width / 2, width / 2 + 10);
        ctx.moveTo(width / 2, width / 2 + 10);
        ctx.lineTo(width / 2 + 10, width / 2 - 10);
        ctx.closePath();
        ctx.stroke();
      }

      clearPath(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(width / 2 - 25, width / 2 - 10, this.radius + 5, this.radius - 10 );
      }
    }

    if (type === "circle") {
      let ctx: CanvasRenderingContext2D | null = (
        CanvaseRef.current as HTMLCanvasElement
      )?.getContext("2d");
      if (ctx) {
        const circle = new CircleProgress();
        circle.draw(ctx);
      }
    }
  }, [percent, statusVal, type, width]);

  return (
    <div
      className={[
        Style.n_progress,
        Style[`n_progress_${type}`],
        Style[`n_progress_${size}`],
        showInfo ? Style.n_progress_showInfo : "",
      ].join(" ")}
    >
      {/* line */}
      {type === "line" && (
        <>
          <div className={[Style.n_progress_outer].join(" ")}>
            <div
              className={[Style.n_progress_inner].join(" ")}
              style={{
                height: size === "normal" ? 8 : 6,
              }}
            >
              <div
                className={[
                  Style.n_progress_bg,
                  Style[`n_progress_bg_${statusVal}`],
                ].join(" ")}
                style={{
                  height: size === "normal" ? 8 : 6,
                  width: `${percent}%`,
                }}
              ></div>
            </div>
          </div>
          {showInfo && ["active"].includes(statusVal) && (
            <span className={[Style.n_progress_text].join(" ")}>
              {percent}%
            </span>
          )}
          {["exception"].includes(statusVal) && (
            <span className={[Style.n_progress_text].join(" ")}>
              <ErrorFill
                color="#ff4d4f"
                width={size !== "small" ? 15 : 12}
                height={size !== "small" ? 15 : 12}
              />
            </span>
          )}
          {["success"].includes(statusVal) && showInfo && (
            <span className={[Style.n_progress_text].join(" ")}>
              <SuccessFill
                color="#52c41a"
                width={size !== "small" ? 15 : 12}
                height={size !== "small" ? 15 : 12}
              />
            </span>
          )}
        </>
      )}
      {/* circle */}
      {type === "circle" && (
        <>
          <canvas
            ref={CanvaseRef}
            id="canvas"
            width={width}
            height={width}
          ></canvas>
        </>
      )}
    </div>
  );
}

export default Progress;
