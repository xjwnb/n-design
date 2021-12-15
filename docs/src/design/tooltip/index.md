
# Tooltip 文字提示

## 代码演示

```tsx
import React from "react";
import { Tooltip } from "docs";

export default () => {
  return (
    <>
      <Tooltip title="什么玩意">
        <span>什么玩意儿</span>
      </Tooltip>
    </>
  )
}
```


```tsx
import React from "react";
import { Tooltip } from "docs";
import { Search } from "../Icons/icon/index";

export default () => {
  return (
    <>
      <Tooltip title="什么玩意">
        <Search />
      </Tooltip>
    </>
  )
}
```


```tsx
import React from "react";
import { Tooltip } from "docs";
import { Search } from "../Icons/icon/index";

export default () => {
  return (
    <>
      <Tooltip title="什么玩意" placement="topLeft">
        TL
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="top">
        Top
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="topRight">
        TR
      </Tooltip>&emsp;&emsp;
      <br />
      <br />
      <Tooltip title="什么玩意" placement="leftTop">
        LT
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="left">
        Left
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="leftBottom">
        LB
      </Tooltip>&emsp;&emsp;
      <br />
      <br />
      <Tooltip title="什么玩意" placement="bottomLeft">
        BL
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="bottom">
        Bottom
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="bottomRight">
        BR
      </Tooltip>&emsp;&emsp;
      <br />
      <br />
      <Tooltip title="什么玩意" placement="rightTop">
        RT
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="right">
        right
      </Tooltip>&emsp;&emsp;
      <Tooltip title="什么玩意" placement="rightBottom">
        RB
      </Tooltip>&emsp;&emsp;
    </>
  )
}
```


```tsx
import React from "react";
import { Tooltip, Button } from "docs";
import { Search } from "../Icons/icon/index";

const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];
export default () => {
  return (
    <>
      {colors.map((item) => (
        <Tooltip key={item} title={item} color={item}>
          <Button>{item}</Button>&emsp;
        </Tooltip>
      ))}
    </>
  )
}
```

## API

| 属性      | 说明                                                         | 类型   | 默认值 |
| --------- | ------------------------------------------------------------ | ------ | ------ |
| title     | 内容                                                         | string | -      |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top`  |
| color     | 背景颜色                                                     | string | -      |

