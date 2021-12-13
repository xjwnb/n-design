# Button 按钮

## 代码演示

```tsx
import React from "react";
import { Button } from "docs";

export default () => {
  
  return (
    <div>
      <Button type="primary">Primary Button</Button>&nbsp;
      <Button>Default Button</Button>&nbsp;
      <Button type="dashed">Dashed Button</Button>&nbsp;
      <Button type="test">Test Button</Button>&nbsp;
      <Button type="link">Link Button</Button>&nbsp;
    </div>
  )
};
```


```tsx
import React from "react";
import { Button } from "docs";
import { Search } from "../Icons/icon/index.js";

export default () => {
  
  return (
    <div>
      <Button type="primary" shape="circle" icon={<Search color="#fff" />} />&nbsp;
      <Button type="primary" shape="circle">A</Button>&nbsp;
      <Button type="primary" icon={<Search color="#fff" />}>Search</Button>&nbsp;
      <Button shape="circle" icon={<Search />} />&nbsp;
      <Button icon={<Search />}>Search</Button>&nbsp;
    </div>
  )
};
```



```tsx
import React from "react";
import { Button } from "docs";
import { Search } from "../Icons/icon/index.js";

export default () => {
  
  return (
    <div>
      <Button shape="circle" icon={<Search />} />&nbsp;
      <Button icon={<Search />}>Search</Button>&nbsp;
      <Button type="dashed" shape="circle" icon={<Search />} />&nbsp;
      <Button type="dashed" icon={<Search />}>Search</Button>&nbsp;
      <Button icon={<Search />} href="http://xiaokache.top/xkcBlog/" />&nbsp;
    </div>
  )
}
```


```tsx
import React from "react";
import { Button } from "docs";
import { Search } from "../Icons/icon/index.js";

export default () => {
  
  return (
    <div>
      <Button type="primary" shape="circle" icon={<Search color="#fff" />} size="large" />&nbsp;
      <Button type="primary" shape="circle" size="large">A</Button>&nbsp;
      <Button type="primary" icon={<Search color="#fff" />} size="large">Search</Button>&nbsp;
      <Button shape="circle" icon={<Search />} size="large" />&nbsp;
      <Button icon={<Search />} size="large">Search</Button>&nbsp;
    </div>
  )
}
```


```tsx
import React from "react";
import { Button } from "docs";
import { Search } from "../Icons/icon/index.js";

export default () => {
  
  return (
    <div>
      <Button shape="circle" icon={<Search />} size="large" />&nbsp;
      <Button icon={<Search />} size="large">Search</Button>&nbsp;
      <Button type="dashed" shape="circle" icon={<Search />} size="large" />&nbsp;
      <Button type="dashed" icon={<Search />} size="large">Search</Button>&nbsp;
      <Button icon={<Search />} size="large" href="http://xiaokache.top/xkcBlog/" />&nbsp;
    </div>
  )
}
```

```tsx
import React from "react";
import { Button } from "docs";

export default () => {
  
  return (
    <div>
      <Button type="primary" block>Dashed Button</Button>&nbsp;
      <Button type="dashed" block>Dashed Button</Button>&nbsp;
      <Button type="text" block>Dashed Button</Button>&nbsp;
    </div>
  )
}
```


```tsx
import React from "react";
import { Button } from "docs";

export default () => {
  
  return (
    <div>
      <Button type="primary" disabled>Primary Button</Button>&nbsp;
      <Button type="dashed" disabled>Dashed Button</Button>&nbsp;
      <Button type="text" disabled>Dashed Button</Button>&nbsp;
      <Button type="link" disabled>Link Butt</Button>&nbsp;
    </div>
  )
}
```


```tsx
import React from "react";
import { Button } from "docs";

export default () => {
  
  return (
    <div>
      <Button type="primary" danger>Primary Button</Button>&nbsp;
      <Button type="dashed" danger>Dashed Button</Button>&nbsp;
      <Button type="text" danger>Dashed Button</Button>&nbsp;
      <Button type="link" danger>Link Button</Button>&nbsp;
    </div>
  )
}
```
