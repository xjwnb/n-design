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