
# Divider 分割线

## 代码演示
```tsx
import React from "react";
import { Divider } from "docs";

export default () => {

  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Sed nonne merninisti   licere mihi ista
       probare, quae sunt a te dicta? Refert   tamen, quo modo.
     </p>
     <Divider />
     <p>
       Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Sed nonne merninisti   licere mihi ista
       probare, quae sunt a te dicta? Refert   tamen, quo modo.
     </p>
     <Divider dashed />
     <p>
       Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Sed nonne merninisti   licere mihi ista
       probare, quae sunt a te dicta? Refert   tamen, quo modo.
     </p>
    </div>
  )
}
```

```tsx
import React from "react";
import { Divider } from "docs";

export default () => {

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider>Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="left">Left Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="right">Right Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  )
}
```


```tsx
import React from "react";
import { Divider } from "docs";

export default () => {

  return (
    <div>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
  )
}
```

## API

| 属性        | 说明                       | 类型                        | 默认值       |
| ----------- | -------------------------- | --------------------------- | ------------ |
| className   | 分割线样式类               | string                      | -            |
| dashed      | 是否虚线                   | boolean                     | false        |
| orientation | 分割线标题的位置           | `left` | `right` | `center` | `center`     |
| plain       | 文字是否显示为普通正文样式 | boolean                     | false        |
| style       | 分割线样式对象             | CSSProperties               | -            |
| type        | 水平还是垂直类型           | `horizontal` | `vertical`   | `horizontal` |

