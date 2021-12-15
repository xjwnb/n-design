
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

## API

| 属性     | 说明               | 类型                                           | 默认值 |
| -------- | ------------------ | ---------------------------------------------- | ------ |
| picker   | 设置选择器类型     | `date` | `week` | `month` | `quarter` | `year` | `date` |
| onChange | 时间发生变化的回调 | function(date: moment, dateString: string)     | -      |

