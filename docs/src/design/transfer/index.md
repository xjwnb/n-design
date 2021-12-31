
# Transfer 穿梭框

## 代码演示


```tsx
import React from "react";
import { Transfer } from "docs";

export default () => {
  return (
    <>
      <Transfer
        dataSource={[
          {
            key: "1",
            title: "title 1",
            description: "des 1",
            disabled: true,
          },
          { key: "2", title: "title 2", description: "des 2" },
          { key: "3", title: "title 3", description: "des 3" },
          { key: "4", title: "title 4", description: "des 4" },
          {
            key: "5",
            title: "title 5",
            description: "des 5",
            disabled: true,
          },
          { key: "6", title: "title 6", description: "des 6" },
        ]}
        titles={["Source", "target"]}
        targetKeys={["1", "2", "3"]}
        onChange={(
          nextTargetKeys: string[],
          direction: "left" | "right",
          moveKeys: string[]
        ) => {
          console.log(nextTargetKeys, direction, moveKeys);
        }}
        onSelectChange={(sourceKeys, targetKeys) => {
          console.log(sourceKeys, targetKeys);
        }}
        onScroll={(direction: "left" | "right", ele: any) => {
          console.log(direction, ele);
        }}
      />
    </>
  )
}
```


```tsx
import React from "react";
import { Transfer } from "docs";

export default () => {
  return (
    <>
      <Transfer
        dataSource={[
          {
            key: "1",
            title: "title 1",
            description: "des 1",
            disabled: true,
          },
          { key: "2", title: "title 2", description: "des 2" },
          { key: "3", title: "title 3", description: "des 3" },
          { key: "4", title: "title 4", description: "des 4" },
          {
            key: "5",
            title: "title 5",
            description: "des 5",
            disabled: true,
          },
          { key: "6", title: "title 6", description: "des 6" },
        ]}
        titles={["Source", "target"]}
        targetKeys={["1", "2", "3"]}
        onChange={(
          nextTargetKeys: string[],
          direction: "left" | "right",
          moveKeys: string[]
        ) => {
          console.log(nextTargetKeys, direction, moveKeys);
        }}
        onSelectChange={(sourceKeys, targetKeys) => {
          console.log(sourceKeys, targetKeys);
        }}
        onScroll={(direction: "left" | "right", ele: any) => {
          console.log(direction, ele);
        }}
        disabled
      />
    </>
  )
}
```


```tsx
import React from "react";
import { Transfer } from "docs";

export default () => {
  return (
    <>
      <Transfer
        dataSource={[
          {
            key: "1",
            title: "title 1",
            description: "des 1",
            disabled: true,
          },
          { key: "2", title: "title 2", description: "des 2" },
          { key: "3", title: "title 3", description: "des 3" },
          { key: "4", title: "title 4", description: "des 4" },
          {
            key: "5",
            title: "title 5",
            description: "des 5",
            disabled: true,
          },
          { key: "6", title: "title 6", description: "des 6" },
        ]}
        titles={["Source", "target"]}
        targetKeys={["1", "2", "3"]}
        onChange={(
          nextTargetKeys: string[],
          direction: "left" | "right",
          moveKeys: string[]
        ) => {
          console.log(nextTargetKeys, direction, moveKeys);
        }}
        onSelectChange={(sourceKeys, targetKeys) => {
          console.log(sourceKeys, targetKeys);
        }}
        onScroll={(direction: "left" | "right", ele: any) => {
          console.log(direction, ele);
        }}
        oneWay
      />
    </>
  )
}
```

## API

| 属性           | 说明                                                         | 类型                                           | 默认值            |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------- | ----------------- |
| titles         | 标题集合，顺序从左至右                                       | strng                                          | ["left", "right"] |
| dataSource     | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外 | DataSourceParam[]                              | []                |
| targetKeys     | 显示在右侧框数据的 key 集合                                  | string[]                                       | []                |
| disabled       | 是否禁用                                                     | boolean                                        | false             |
| oneWay         | 展示为单向样式                                               | boolean                                        | false             |
| render         | 每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 `label` 字段为 ReactElement，`value` 字段为 title | (record) => ReactNode                          | -                 |
| onChange       | 选项在两栏之间转移时的回调函数                               | (targetKeys, direction, moveKeys): void        | -                 |
| onScroll       | 选项列表滚动时的回调函数                                     | (direction, event): void                       | -                 |
| onSelectChange | 选中项发生改变时的回调函数                                   | (sourceSelectedKeys, targetSelectedKeys): void | -                 |

```typescript
interface DataSourceParam {
  key: string;
  title: string;
  description: string;
  disabled?: boolean;
  label?: string;
}
```

