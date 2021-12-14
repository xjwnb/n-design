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

## API

| 属性             | 说明                                                       | 类型                               | 默认值            |
| ---------------- | ---------------------------------------------------------- | ---------------------------------- | ----------------- |
| defaultCurrent   | 默认的当前页数                                             | number                             | 1                 |
| defaultPageSize  | 默认的每页条数                                             | number                             | 10                |
| total            | 数据总数                                                   | number                             | 0                 |
| disabled         | 禁用分页                                                   | boolean                            | -                 |
| showQuickJumper  | 是否可以快速跳转至某页                                     | boolean \| { goButton: ReactNode } | false             |
| pageSizeOptions  | 指定每页可以显示多少条                                     | string[]                           | [10, 20, 50, 100] |
| onChange         | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize)           | -                 |
| onShowSizeChange | pageSize 变化的回调                                        | function(current, size)            | -                 |

