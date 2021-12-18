

# Drawer 抽屉

## 代码演示

```tsx
import React, { useState } from "react";
import { Drawer, Button } from "docs";

export default () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Button onClick={() => setShowDrawer(true)}>Right</Button>
      <Drawer title="什么玩意啊" visible={showDrawer} onClose={() => setShowDrawer(false)}>
          123... 什么玩意啊
      </Drawer>
    </>
  )
}
```


```tsx
import React, { useState } from "react";
import { Drawer, Button } from "docs";

export default () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Button onClick={() => setShowDrawer(true)}>Top</Button>
      <Drawer title="什么玩意啊" visible={showDrawer} placement="top" onClose={() => setShowDrawer(false)}>
          123... 什么玩意啊
      </Drawer>
    </>
  )
}
```


```tsx
import React, { useState } from "react";
import { Drawer, Button } from "docs";

export default () => {
  const [showDrawer, setShowDrawer] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowDrawer(true)}>Bottom</Button>
      <Drawer title="什么玩意啊" visible={showDrawer} placement="bottom" onClose={() => setShowDrawer(false)}>
          123... 什么玩意啊
      </Drawer>
    </>
  )
}
```


```tsx
import React, { useState } from "react";
import { Drawer, Button } from "docs";

export default () => {
  const [showDrawer, setShowDrawer] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowDrawer(true)}>Left</Button>
      <Drawer title="什么玩意啊" visible={showDrawer} placement="left" onClose={() => setShowDrawer(false)}>
          123... 什么玩意啊
      </Drawer>
    </>
  )
}
```

## API

| 属性      | 说明                                             | 类型                                | 默认值  |
| --------- | ------------------------------------------------ | ----------------------------------- | ------- |
| placement | 抽屉的方向                                       | `top` | `right` | `bottom` | `left` | `right` |
| width     | 宽度                                             | string \| number                    | 378     |
| height    | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number                    | 256     |
| visible   | Drawer 是否可见                                  | boolean                             | -       |
| title     | 标题                                             | ReactNode                           | -       |
| onClose   | 点击左上角叉按钮的回调                           | function                            | -       |

