
# Tabs 标签页

## 代码演示

```tsx
import React from "react";
import { Tabs } from "docs";

export default () => {
  return (
    <>
      <Tabs
        onChange={(key: string) => {
          console.log(key);
        }}
        onTabClick={(key: string, event: BaseSyntheticEvent) => {
          console.log(key, event);
        }}
      >
        <Tabs.TabPane 
          tab="什么玩意儿1" 
          id="1">
          什么玩意儿1
        </Tabs.TabPane>
        <Tabs.TabPane 
          tab="什么玩意儿2" 
          id="2">
          什么玩意儿2
        </Tabs.TabPane>
        <Tabs.TabPane 
          tab="什么玩意儿3" 
          disabled 
          id="3">
          什么玩意儿3
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
```


```tsx
import React from "react";
import { Tabs } from "docs";
import { Loading } from "../Icons/icon/index";

export default () => {
  return (
    <>
      <Tabs centered>
        <Tabs.TabPane tab="什么玩意儿1" id="1">
          什么玩意儿1
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿2" id="2">
          什么玩意儿2
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
          什么玩意儿3
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <Loading /> 什么玩意儿4
            </span>
          }
          id="4"
        >
          什么玩意儿4
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
```


```tsx
import React from "react";
import { Tabs } from "docs";
import { Loading } from "../Icons/icon/index";

export default () => {
  return (
    <>
      <Tabs tabPosition="bottom">
        <Tabs.TabPane tab="什么玩意儿1" id="1">
          什么玩意儿1
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿2" id="2">
          什么玩意儿2
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
          什么玩意儿3
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <Loading /> 什么玩意儿4
            </span>
          }
          id="4"
        >
          什么玩意儿4
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
```


```tsx
import React from "react";
import { Tabs } from "docs";
import { Loading } from "../Icons/icon/index";

export default () => {
  return (
    <>
      <Tabs tabPosition="left">
        <Tabs.TabPane tab="什么玩意儿1" id="1">
          什么玩意儿1
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿2" id="2">
          什么玩意儿2
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
          什么玩意儿3
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <Loading /> 什么玩意儿4
            </span>
          }
          id="4"
        >
          什么玩意儿4
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
```


```tsx
import React from "react";
import { Tabs } from "docs";
import { Loading } from "../Icons/icon/index";

export default () => {
  return (
    <>
      <Tabs tabPosition="right">
        <Tabs.TabPane tab="什么玩意儿1" id="1">
          什么玩意儿1
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿2" id="2">
          什么玩意儿2
        </Tabs.TabPane>
        <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
          什么玩意儿3
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <Loading /> 什么玩意儿4
            </span>
          }
          id="4"
        >
          什么玩意儿4
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
```

## API

| 属性             | 说明                                             | 类型                   | 默认值       |
| ---------------- | ------------------------------------------------ | ---------------------- | ------------ |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey     | string                 | `第一个面板` |
| centered         | 标签居中展示                                     | boolean                | false        |
| tabPosition      | 页签位置，可选值有 `top` `right` `bottom` `left` | string                 | `top`        |
| onChange         | 切换面板的回调                                   | function(activeKey) {} | -            |
| onTabClick       | tab 被点击的回调                                 | function               | -            |

### Tabs.TabPane

| 属性     | 说明             | 类型      | 默认值 |
| -------- | ---------------- | --------- | ------ |
| tab      | 选项卡头显示文字 | ReactNode | -      |
| id       | 对应 activeKey   | string    | -      |
| disabled | 是否禁用         | boolean   | false  |

