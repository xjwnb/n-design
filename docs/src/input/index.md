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