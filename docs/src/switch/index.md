# Switch 开关

## 代码演示

```tsx
import React from "react";
import { Switch } from "docs";

export default () => {
  return (
    <div>
      <Switch defaultValue onChange={(value, e) => {
        console.log(value, e);
      }} />
    </div>
  )
}
```

```tsx
import React from "react";
import { Switch } from "docs";

export default () => {
  return (
    <div>
      <Switch defaultValue onChange={(value, e) => {
        console.log(value, e);
      }} disabled />
    </div>
  )
}
```

```tsx
import React from "react";
import { Switch } from "docs";

export default () => {
  return (
    <div>
      <Switch defaultValue checkedChildren="开启" unCheckedChildren="关闭" />
    </div>
  )
}
```


```tsx
import React from "react";
import { Switch } from "docs";
import { Left, Right } from "../Icons/icon/index.js";

export default () => {
  return (
    <div>
      <Switch defaultValue checkedChildren={<Left color="#fff" />} unCheckedChildren={<Right color="#fff" />}
        />
    </div>
  )
}
```

## API

| 属性              | 说明           | 类型                                     | 默认值 |
| ----------------- | -------------- | ---------------------------------------- | ------ |
| defaultValue      | 初始是否选中   | boolean                                  | false  |
| checkedChildren   | 选中时的内容   | ReactNode                                | -      |
| unCheckedChildren | 非选中时的内容 | ReactNode                                | -      |
| disabled          | 是否禁用       | boolean                                  | false  |
| onChange          | 变化时回调函数 | function(checked: boolean, event: Event) | -      |

