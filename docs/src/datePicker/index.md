
# DatePicker 日期选择器

## 代码演示

```tsx
import React from "react";
import { DatePicker } from "docs";

export default () => {
  return (
    <>
      <DatePicker
        onChange={(val) => {
          console.log(val);
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { DatePicker } from "docs";

export default () => {
  return (
    <>
      <DatePicker
        picker="week"
        onChange={(val) => {
          console.log(val);
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { DatePicker } from "docs";

export default () => {
  return (
    <>
      <DatePicker
        picker="month"
        onChange={(val) => {
          console.log(val);
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { DatePicker } from "docs";

export default () => {
  return (
    <>
      <DatePicker
        picker="year"
        onChange={(val) => {
          console.log(val);
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { DatePicker } from "docs";

export default () => {
  return (
    <>
      <DatePicker.RangePicker
        onChange={(dateTime: Date[], dateStr: string[]) => {
          console.log(dateTime, dateStr);
        }}
      />
    </>
  )
}
```