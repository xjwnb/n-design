# Rate 评分

## 代码演示

```tsx
import React from "react";
import { Rate } from "docs";

export default () => {
  return (
    <>
      <Rate />
    </>
  )
}
```


```tsx
import React from "react";
import { Rate } from "docs";

export default () => {
  return (
    <>
      <Rate value={1} />
    </>
  )
}
```


```tsx
import React from "react";
import { Rate } from "docs";

export default () => {
  return (
    <>
      <Rate value={6} count={10} />
    </>
  )
}
```


```tsx
import React from "react";
import { Rate } from "docs";

export default () => {
  return (
    <>
      <Rate
        allowHalf
        value={4.5}
        onChange={(value) => {
          console.log(value);
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { Rate } from "docs";
import { Search } from "../Icons/icon/index.js";

export default () => {
  return (
    <>
      <Rate
        character={<Search />}
        value={3}
        allowHalf
        style={{
          width: 50,
          height: 50,
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { Rate } from "docs";
import { Search } from "../Icons/icon/index.js";

export default () => {
  return (
    <>
      <Rate
        character={"A"}
        value={3}
        allowHalf
        style={{
          fontSize: 50
        }}
      />
    </>
  )
}
```

## API

| 属性      | 说明           | 类型                    | 默认值 |
| --------- | -------------- | ----------------------- | ------ |
| allowHalf | 是否允许半选   | boolean                 | false  |
| count     | star 总数      | number                  | 5      |
| value     | 当前数，受控值 | number                  | -      |
| character | 自定义字符     | ReactNode \| string     | -      |
| style     | 自定义样式对象 | CSSProperties           | -      |
| onChange  | 选择时的回调   | function(value: number) | -      |

