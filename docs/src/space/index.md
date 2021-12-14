# Space 间距

## 代码演示

```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
      </Space>
    </div>
  )
}
```


```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space size="middle">
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
      </Space>
    </div>
  )
}
```


```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space size="large">
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
      </Space>
    </div>
  )
}
```

```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space align="start">
        什么东西 什么东西
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <span>什么东西</span>
        <span>什么东西</span>
      </Space>
    </div>
  )
}
```


```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space align="end">
        什么东西 什么东西
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <span>什么东西</span>
        <span>什么东西</span>
      </Space>
    </div>
  )
}
```


```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space align="center">
        什么东西 什么东西
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <span>什么东西</span>
        <span>什么东西</span>
      </Space>
    </div>
  )
}
```


```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space align="baseline">
        什么东西 什么东西
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <span>什么东西</span>
        <span>什么东西</span>
      </Space>
    </div>
  )
}
```


```tsx
import React from "react";
import { Space, Button } from "docs";

export default () => {
  return (
    <div>
      <Space wrap size={[8, 16]}>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
        <Button>什么东西</Button>
      </Space>
    </div>
  )
}
```