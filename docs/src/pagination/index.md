# Pagination 分页

## 代码演示

```tsx
import React from "react";
import { Pagination } from "docs";

export default () => {
  return (
    <div>
      <Pagination total={100} />
    </div>
  )
}
```


```tsx
import React from "react";
import { Pagination } from "docs";

export default () => {
  return (
    <div>
      <Pagination total={100} disabled />
    </div>
  )
}
```


```tsx
import React from "react";
import { Pagination } from "docs";

export default () => {
  return (
    <div>
      <Pagination total={100} onChange={(current, pageSize) => {
        console.log(current, pageSize);
      }}  showTotal={(total) => `共${total}条数据`}
      />
    </div>
  )
}
```


```tsx
import React from "react";
import { Pagination } from "docs";

export default () => {
  return (
    <div>
      <Pagination total={100} onChange={(current, pageSize) => {
        console.log(current, pageSize);
      }} showTotal={(total) => `共${total}条数据`} showQuickJumper
      />
    </div>
  )
}
```