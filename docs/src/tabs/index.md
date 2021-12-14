
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