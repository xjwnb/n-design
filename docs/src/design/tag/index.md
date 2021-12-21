# Tag 标签

## 代码演示


```tsx
import React from "react";
import { Tag } from "docs";

export default () => {
  return (
    <>
      <Tag>什么玩意</Tag>
    </>
  )
}
```

```tsx
import React from "react";
import { Tag } from "docs";

export default () => {
  return (
    <>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </>
  )
}
```

```tsx
import React from "react";
import { Tag } from "docs";

export default () => {
  return (
    <>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </>
  )
}
```


```tsx
import React from "react";
import { Tag } from "docs";

export default () => {
  return (
    <>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </>
  )
}
```



```tsx
import React from "react";
import { Tag } from "docs";
import { Loading } from "../Icons/icon/index.js";

export default () => {
  return (
    <>
      <Tag color="success" icon={<Loading />}>什么玩意</Tag>
    </>
  )
}
```

```tsx
import React from "react";
import { Tag } from "docs";

export default () => {
  return (
    <>
      <Tag
        color="blue"
        closable
        onClose={() => {
          console.log("点击了关闭");
        }}
      >
        什么玩意
      </Tag>
    </>
  )
}
```

## API

| 属性     | 说明                             | 类型        | 默认值 |
| -------- | -------------------------------- | ----------- | ------ |
| closable | 标签是否可以关闭（点击默认关闭） | boolean     | false  |
| color    | 标签色                           | string      | -      |
| icon     | 设置图标                         | ReactNode   | -      |
| visible  | 是否显示标签                     | boolean     | true   |
| onClose  | 关闭时的回调                     | (e) => void | -      |

