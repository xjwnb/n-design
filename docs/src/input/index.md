# Input 输入框

## 代码演示

```tsx
import React from "react";
import { Input } from "docs";

export default () => {
  
  return (
    <div>
      <Input placeholder="Basic usage" />
    </div>
  )
};
```

```tsx
import React from "react";
import { Input } from "docs";

export default () => {
  
  return (
    <div>
      <Input placeholder="large size" size="large" />
      <br />
      <Input placeholder="default size" />
      <br />
      <Input placeholder="small size" size="small" />
    </div>
  )
};
```


```tsx
import React from "react";
import { Input } from "docs";
import { Search, Left } from "../Icons/icon/index.js";

export default () => {
  
  return (
    <div>
      <Input placeholder="..." prefix={<Search />} suffix={<Left />} />
      <br />
      <Input placeholder="...                   " suffix={<Left />} />
      <br />
      <Input placeholder="..." prefix={<Search />} />
    </div>
  )
};
```

```tsx
import React from "react";
import { Input } from "docs";

export default () => {
  
  return (
    <div>
      <Input.Password placeholder="请输入密码" />
    </div>
  )
};
```


```tsx
import React from "react";
import { Input } from "docs";

export default () => {
  
  return (
    <div>
      <Input.Search placeholder="Search" width={200} />
      <br />
      <Input.Search placeholder="Search" width={200} enterButton />
      <br />
      <Input.Search placeholder="Search" width={200} enterButton="Search"
        />
    </div>
  )
};
```


```tsx
import React from "react";
import { Input } from "docs";

export default () => {
  
  return (
    <div>
      <Input.TextArea />
      <br />
      <Input.TextArea bordered={false} />
    </div>
  )
};
```

```tsx
import React from "react";
import { Input } from "docs";

export default () => {
  
  return (
    <div>
      <Input allowClear />
    </div>
  )
};
```

## API

| 属性       | 说明                                               | 类型                         | 默认值 |
| ---------- | -------------------------------------------------- | ---------------------------- | ------ |
| value      | 输入框内容                                         | string                       | -      |
| size       | 控件大小。注：标准表单内的输入框大小限制为 `large` | `large` | `middle` | `small` | -      |
| prefix     | 带有前缀图标的 input                               | ReactNode                    | -      |
| suffix     | 带有后缀图标的 input                               | ReactNode                    | -      |
| maxLength  | 最大长度                                           | number                       | -      |
| allowClear | 可以点击清除图标删除内容                           | boolean                      | -      |
| onChange   | 输入框内容变化时的回调                             | function(e)                  | -      |
| onBlur     | 输入框失去焦点的回调                               | function(e)                  | -      |
| onFocus    | 输入框获得焦点的回调                               | function(e)                  | -      |

