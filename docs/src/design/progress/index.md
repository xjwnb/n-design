
# Progress 进度条

## 代码演示

```tsx
import React from "react";
import { Progress } from "docs";

export default () => {
  return (
    <>
      <Progress percent={80} />
      <Progress percent={80} status={"exception"} />
      <Progress percent={100} />
      <Progress percent={100} showInfo={false} />
    </>
  )
}
```


```tsx
import React from "react";
import { Progress } from "docs";

export default () => {
  return (
    <>
      <Progress size="small" percent={80} />
      <Progress size="small" percent={80} status={"exception"} />
      <Progress size="small" percent={100} />
      <Progress size="small" percent={100} showInfo={false} />
    </>
  )
}
```


```tsx
import React from "react";
import { Progress } from "docs";

export default () => {
  return (
    <>
      <Progress type="circle" percent={80} />
      <Progress type="circle" percent={80} status="exception" />
      <Progress type="circle" percent={100} />
    </>
  )
}
```


```tsx
import React from "react";
import { Progress } from "docs";

export default () => {
  return (
    <>
      <Progress type="circle" percent={80} width={80} />
    </>
  )
}
```



```tsx
import React, { useState, useEffect } from "react";
import { Progress } from "docs";

export default () => {

  const [percent, setpercent] = useState(0);

  useEffect(() => {
    let timer: any = null;
    clearTimeout(timer);
    if (percent === 100) {
      return;
    }
    timer = setTimeout(() => {
      if (percent === 100) {
        clearTimeout(timer);
      }
      setpercent((per) => per + 1);
    }, 1000);
  }, [percent]);

  return (
    <>
      <Progress
        type="circle"
        percent={percent}
        width={80}
        strokeLinecap="square"
      />
    </>
  )
}
```

## API

| 属性          | 说明                                               | 类型               | 默认值                                      |
| ------------- | -------------------------------------------------- | ------------------ | ------------------------------------------- |
| percent       | 百分比                                             | number             | 0                                           |
| type          | 类型，可选 `line` `circle`                         | string             | `line`                                      |
| showInfo      | 是否显示进度数值或状态图标                         | boolean            | true                                        |
| size          | 进度条大小`normal` `small`（type = "line" 时有效） | string             | "normal"                                    |
| status        | 状态，可选：`success` `exception`  `active`        | string             | -                                           |
| width         | 进度条宽度（type = "circle"有效）                  | string             | （type="line", 100%）（type="circle", 120） |
| strokeLinecap | 进度条的样式`square` `round`（type = "circle"有效） | string |`round` |

