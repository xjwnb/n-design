
# Message 全局提示

## 代码演示

```tsx
import React from "react";
import { message, Button } from "docs";

export default () => {
  return (
    <>
      <Button
        onClick={() => {
          message.info("info 内容");
        }}
      >
        Info
      </Button>&emsp;
      <Button
        onClick={() => {
          message.success("success 内容", 0);
        }}
      >
        Success
      </Button>&emsp;
      <Button
        onClick={() => {
          message.error("error 内容");
        }}
      >
        Error
      </Button>&emsp;
      <Button
        onClick={() => {
          message.warning("warning 内容");
        }}
      >
        Warning
      </Button>
    </>
  )
}
```


```tsx
import React from "react";
import { message, Button } from "docs";

export default () => {
  return (
    <>
      <Button
        onClick={() => {
          message.warning({
            content: "config 是对象",
            onClick: () => console.log("点击什么玩意儿"),
          });
        }}
      >
        Warning config = Object
      </Button>
    </>
  )
}
```