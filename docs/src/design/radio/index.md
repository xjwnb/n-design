
# Radio 单选框

## 代码演示

```tsx
import React from "react";
import { Radio } from "docs";

export default () => {

  return (
    <div>
      <Radio.Group value={1} onChange={(e) => {
        console.log(e);
      }}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3} disabled>C</Radio>
      </Radio.Group>
    </div>
  )
}
```


```tsx
import React from "react";
import { Radio } from "docs";

export default () => {

  return (
    <div>
      <Radio.Group
          value={2}
          onChange={(e)=> {
            console.log(e);
          }}
          options={[
            {
              label: "A",
              value: "1",
            },
            {
              label: "B",
              value: "2",
            },
            {
              label: "C",
              value: "3",
              disabled: true,
            },
          ]}
        />
    </div>
  )
}
```


```tsx
import React from "react";
import { Radio } from "docs";

export default () => {

  return (
    <div>
      <Radio.Group value={2} onChange={e => {
        console.log(e);
      }} optionType="button"
        options={[
          {
            label: "A",
            value: "1",
          },
          {
            label: "B",
            value: "2",
          },
          {
            label: "C",
            value: "3",
            disabled: true,
          },
        ]}
      />
    </div>
  )
}
```

## API

### Row Props

| 属性     | 说明                              | 类型    | 默认值 |
| -------- | --------------------------------- | ------- | ------ |
| disabled | 禁用 Radio                        | boolean | false  |
| value    | 根据 value 进行比较，判断是否选中 | any     | -      |

### Col Props

| 属性   | 说明                                        | 类型   | 默认值 |
| ------ | ------------------------------------------- | ------ | ------ |
| span   | 栅格占位格数，为 0 时相当于 `display: none` | number | -      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格      | number | 0      |
| pull   | 栅格向左移动格数                            | number | 0      |
| push   | 栅格向右移动格数                            | number | 0      |

