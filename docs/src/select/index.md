# Select 选择器

## 代码演示

```tsx
import React from "react";
import { Select } from "docs";

export default () => {
  return (
    <div>
      <Select placeholder="你选什么东西"   defaultValue="2" onChange={value => {
        console.log(value);
      }}
          >
        <Select.Option value="1">什么东西</Select.Option>
        <Select.Option value="2">什么东西啊</Select.Option>
        <Select.Option value="3" disabled>什么东西...
        </Select.Option>
        <Select.Option value="4">什么东西，秀儿</Select.Option>
      </Select>
    </div>
  )
}
```


```tsx
import React from "react";
import { Select } from "docs";

export default () => {
  return (
    <div>
      <Select placeholder="你选什么东西" defaultValue="2" disabled>
        <Select.Option value="1">什么东西</Select.Option>
        <Select.Option value="2">什么东西啊</Select.Option>
      </Select>
    </div>
  )
}
```


```tsx
import React from "react";
import { Select } from "docs";

export default () => {
  return (
    <div>
      <Select placeholder="你选什么东西" defaultValue="2" allowClear>
        <Select.Option value="1">什么东西</Select.Option>
        <Select.Option value="2">什么东西啊</Select.Option>
      </Select>
    </div>
  )
}
```


```tsx
import React from "react";
import { Select } from "docs";

export default () => {
  return (
    <div>
      <Select style={{ width: 300 }} placeholder="你选什么东西" defaultValue="2" showSearch
      >
        <Select.Option value="1">什么东西</Select.Option>
        <Select.Option value="2">什么东西啊</Select.Option>
        <Select.Option value="3">A</Select.Option>
        <Select.Option value="4">AB</Select.Option>
        <Select.Option value="5">C</Select.Option>
        <Select.Option value="6">D</Select.Option>
        <Select.Option value="7">E</Select.Option>
        <Select.Option value="8">F</Select.Option>
        <Select.Option value="9">G</Select.Option>
        <Select.Option value="10">H</Select.Option>
        <Select.Option value="11">I</Select.Option>
        <Select.Option value="12">J</Select.Option>
      </Select>
    </div>
  )
}
```


```tsx
import React from "react";
import { Select } from "docs";

export default () => {
  return (
    <div>
      <Select mode="multiple" style={{ width: 300 }} placeholder="你选什么东西" defaultValue={["A", "b", "C", "H", "J"]} onChange={value => {
        console.log(value);
      }} >
        <Select.Option value="1">什么东西</Select.Option>
        <Select.Option value="2">什么东西啊</Select.Option>
        <Select.Option value="3">A</Select.Option>
        <Select.Option value="4">AB</Select.Option>
        <Select.Option value="5">C</Select.Option>
        <Select.Option value="6">D</Select.Option>
        <Select.Option value="7">E</Select.Option>
        <Select.Option value="8">F</Select.Option>
        <Select.Option value="9">G</Select.Option>
        <Select.Option value="10">H</Select.Option>
        <Select.Option value="11">I</Select.Option>
        <Select.Option value="12">J</Select.Option>
      </Select>
    </div>
  )
}
```