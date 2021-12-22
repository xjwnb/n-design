<!--
 * @Author: your name
 * @Date: 2021-12-22 17:05:36
 * @LastEditTime: 2021-12-22 17:12:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\docs\src\design\collapse\index.md
-->
# Collapse 折叠面板

## 代码演示

```tsx
import React from "react";
import { Collapse } from "docs";

export default () => {
  return (
    <>
      <Collapse
        onChange={(val) => {
          console.log(val);
        }}
        defaultActiveKey={["2"]}
      >
        <Collapse.Pancel id="1" header="什么玩意1">
          什么玩意儿 children1
        </Collapse.Pancel>
        <Collapse.Pancel id="2" header="什么玩意2">
          什么玩意儿 children2
        </Collapse.Pancel>
        <Collapse.Pancel id="3" header="什么玩意3">
          什么玩意儿 children3
        </Collapse.Pancel>
      </Collapse>
    </>
  )
}
```


```tsx
import React from "react";
import { Collapse } from "docs";

export default () => {
  return (
    <>
      <Collapse
        onChange={(val) => {
          console.log(val);
        }}
        accordion
      >
        <Collapse.Pancel id="1" header="什么玩意1">
          什么玩意儿 children1
        </Collapse.Pancel>
        <Collapse.Pancel id="2" header="什么玩意2">
          什么玩意儿 children2
        </Collapse.Pancel>
        <Collapse.Pancel id="3" header="什么玩意3">
          什么玩意儿 children3
        </Collapse.Pancel>
      </Collapse>
    </>
  )
}
```



```tsx
import React from "react";
import { Collapse } from "docs";

export default () => {
  return (
    <>
      <Collapse
        onChange={(val) => {
          console.log(val);
        }}
        ghost
      >
        <Collapse.Pancel id="1" header="什么玩意1">
          什么玩意儿 children1
        </Collapse.Pancel>
        <Collapse.Pancel id="2" header="什么玩意2">
          什么玩意儿 children2
        </Collapse.Pancel>
        <Collapse.Pancel id="3" header="什么玩意3">
          什么玩意儿 children3
        </Collapse.Pancel>
      </Collapse>
    </>
  )
}
```


```tsx
import React from "react";
import { Collapse } from "docs";

export default () => {
  return (
    <>
      <Collapse
        onChange={(val) => {
          console.log(val);
        }}
        defaultActiveKey={["2"]}
      >
        <Collapse.Pancel id="1" showArrow={false} header="什么玩意1">
          什么玩意儿 children1
        </Collapse.Pancel>
        <Collapse.Pancel id="2" showArrow={false} header="什么玩意2">
          什么玩意儿 children2
        </Collapse.Pancel>
        <Collapse.Pancel id="3" showArrow={false} header="什么玩意3">
          什么玩意儿 children3
        </Collapse.Pancel>
      </Collapse>
    </>
  )
}
```

## API

| 属性             | 说明                   | 类型     | 默认值 |
| ---------------- | ---------------------- | -------- | ------ |
| defaultActiveKey | 初始化选中面板的 key   | string[] | []     |
| accordion        | 手风琴模式             | boolean  | false  |
| ghost            | 使折叠面板透明且无边框 | boolean  | false  |
| onChange         | 切换面板的回调         | function | -      |

### Collapse.Panel

| 属性      | 说明                     | 类型      | 默认值 |
| --------- | ------------------------ | --------- | ------ |
| id        | 标识                     | string    | -      |
| showArrow | 是否展示当前面板上的箭头 | boolean   | true   |
| header    | 面板头内容               | ReactNode | -      |

