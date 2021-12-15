
# Checkbox 多选框

## 代码演示


```tsx
import React from "react";
import { Checkbox } from "docs";

export default () => {
  return (
    <>
      <Checkbox onChange={(e: any) => console.log(e.target.checked)}>
        什么玩意儿
      </Checkbox>
    </>
  )
}
```


```tsx
import React from "react";
import { Checkbox } from "docs";

export default () => {
  return (
    <>
      <Checkbox defaultChecked={true} disabled>
        什么玩意儿
      </Checkbox>
    </>
  )
}
```


```tsx
import React from "react";
import { Checkbox } from "docs";

export default () => {
  return (
    <>
      <Checkbox.Group
        options={[
          {
            label: "a",
            value: "a",
          },
          {
            label: "b",
            value: "b",
          },
          {
            label: "c",
            value: "c",
            disabled: true,
          },
        ]}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { Checkbox } from "docs";

export default () => {
  return (
    <>
      <Checkbox.Group
        options={[
          {
            label: "a",
            value: "a",
          },
          {
            label: "b",
            value: "b",
          },
          {
            label: "c",
            value: "c",
          },
        ]}
        defaultValue={["a", "b"]}
      />
    </>
  )
}
```

## API

| 属性           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
| checked        | 指定当前是否选中                        | boolean           | false  |
| defaultChecked | 初始是否选中                            | boolean           | false  |
| disabled       | 失效状态                                | boolean           | false  |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  |
| onChange       | 变化时回调函数                          | function(e:Event) | -      |

## Checkbox.Group

| 属性         | 说明           | 类型                   | 默认值 |
| ------------ | -------------- | ---------------------- | ------ |
| defaultValue | 默认选中的选项 | string[]               | []     |
| disabled     | 整组失效       | boolean                | false  |
| options      | 指定可选项     | string[] \| Option[]   | []     |
| onChange     | 变化时回调函数 | function(checkedValue) | -      |

### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

