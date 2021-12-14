
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