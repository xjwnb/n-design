
# BackTop 置顶

## 代码演示

```tsx
import React from "react";
import { BackTop } from "docs";

export default () => {
  return (
    <div style={{
      height: 300,
      lineHeight: "300px"
    }}>
      <BackTop />
      Scroll down to see the bottom-right gray button.
    </div>
  )
}
```

```tsx
import React from "react";
import { BackTop } from "docs";

export default () => {
  return (
    <div>
      <div
        id="backTop"
        style={{
          height: 500,
          border: "1px solid #1890ff",
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            height: 2000,
          }}
        ></div>
        <BackTop target={() => document.getElementById("backTop")}>
          <div
            style={{
              height: 40,
              width: 40,
              lineHeight: "40px",
              borderRadius: 4,
              backgroundColor: "#1088e9",
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            UP
          </div>
        </BackTop>
      </div>
    </div>
  )
}
```



## API

| 属性             | 说明                                                         | 类型              | 默认值       |
| ---------------- | ------------------------------------------------------------ | ----------------- | ------------ |
| duration         | 回到顶部所需时间（ms）                                       | number            | 450          |
| target           | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop                           | number            | 400          |
| onClick          | 点击按钮的回调函数                                           | function          | -            |