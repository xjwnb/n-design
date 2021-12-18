<!--
 * @Author: your name
 * @Date: 2021-12-18 17:23:24
 * @LastEditTime: 2021-12-18 17:25:57
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\docs\src\design\cascader\index.md
-->
# Cascader 级联选择

## 代码演示

```tsx
import React from "react";
import { Cascader } from "docs";

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  

  export default () => {
    return (
      <>
        <Cascader
          placeholder="什么玩意"
          options={options}
          onChange={(val: any) => console.log(val)}
        />
      </>
    )
  }
```

## API

| 属性        | 说明             | 类型            | 默认值 |
| ----------- | ---------------- | --------------- | ------ |
| placeholder | 输入框占位文本   | string          | -      |
| options     | 可选项数据源     | Option[]        | -      |
| onChange    | 选择完成后的回调 | (value) => void | -      |

```typescript
interface Option {
  value: string;
  label: string;
  children?: Array<Option>;
}
```

