# Menu 菜单

## 代码演示

```tsx
import React from "react";
import { Menu } from "docs";

export default () => {
  return (
    <>
      <Menu
        onChange={(val) => {
          console.log(val);
        }}
      >
        <Menu.SubMenu id="sub1" title="submenu1">
          <Menu.Item id="it1">Item1</Menu.Item>
          <Menu.Item id="it2">Item2</Menu.Item>
          <Menu.Item id="it3">Item3</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2" title="submenu2">
          <Menu.ItemGroup title="ItemGroup1">
            <Menu.Item id="it4">Item4</Menu.Item>
            <Menu.Item id="it5">Item5</Menu.Item>
          </Menu.ItemGroup>
          <Menu.SubMenu id="sub3" title="submenu3">
            <Menu.Item id="it6">Item6</Menu.Item>
            <Menu.Item id="it7">Item7</Menu.Item>
            <Menu.Item id="it8">
              <a href="http://www.xiaokache.top/xkcBlog">Blog</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub4" title="submenu4">
          <Menu.Item id="it9">Item9</Menu.Item>
          <Menu.Item id="it10">Item10</Menu.Item>
          <Menu.Item id="it11">Item11</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )
}
```


```tsx
import React from "react";
import { Menu } from "docs";

export default () => {
  return (
    <>
      <Menu
        onChange={(val) => {
          console.log(val);
        }}
        theme="dark"
      >
        <Menu.SubMenu id="sub1" title="submenu1">
          <Menu.Item id="it1">Item1</Menu.Item>
          <Menu.Item id="it2">Item2</Menu.Item>
          <Menu.Item id="it3">Item3</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu id="sub2" title="submenu2">
          <Menu.ItemGroup title="ItemGroup1">
            <Menu.Item id="it4">Item4</Menu.Item>
            <Menu.Item id="it5">Item5</Menu.Item>
          </Menu.ItemGroup>
          <Menu.SubMenu id="sub3" title="submenu3">
            <Menu.Item id="it6">Item6</Menu.Item>
            <Menu.Item id="it7">Item7</Menu.Item>
            <Menu.Item id="it8">
              <a href="http://www.xiaokache.top/xkcBlog">Blog</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub4" title="submenu4">
          <Menu.Item id="it9">Item9</Menu.Item>
          <Menu.Item id="it10">Item10</Menu.Item>
          <Menu.Item id="it11">Item11</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )
}
```


```tsx
import React from "react";
import { Menu } from "docs";

export default () => {
  return (
    <>
      <Menu
        onChange={(val) => {
          console.log(val);
        }}
        mode="inline"
      >
        <Menu.SubMenu id="sub1" title="submenu1">
          <Menu.Item id="it1">Item1</Menu.Item>
          <Menu.Item id="it2">Item2</Menu.Item>
          <Menu.Item id="it3">Item3</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2" title="submenu2">
          <Menu.ItemGroup title="ItemGroup1">
            <Menu.Item id="it4">Item4</Menu.Item>
            <Menu.Item id="it5">Item5</Menu.Item>
          </Menu.ItemGroup>
          <Menu.SubMenu id="sub3" title="submenu3">
            <Menu.Item id="it6">Item6</Menu.Item>
            <Menu.Item id="it7">Item7</Menu.Item>
            <Menu.Item id="it8">
              <a href="http://www.xiaokache.top/xkcBlog">Blog</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub4" title="submenu4">
          <Menu.Item id="it9">Item9</Menu.Item>
          <Menu.Item id="it10">Item10</Menu.Item>
          <Menu.Item id="it11">Item11</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )
}
```


```tsx
import React from "react";
import { Menu } from "docs";

export default () => {
  return (
    <>
      <Menu
        onChange={(val) => {
          console.log(val);
        }}
        mode="inline"
        theme="dark"
      >
        <Menu.SubMenu id="sub1" title="submenu1">
          <Menu.Item id="it1">Item1</Menu.Item>
          <Menu.Item id="it2">Item2</Menu.Item>
          <Menu.Item id="it3">Item3</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2" title="submenu2">
          <Menu.ItemGroup title="ItemGroup1">
            <Menu.Item id="it4">Item4</Menu.Item>
            <Menu.Item id="it5">Item5</Menu.Item>
          </Menu.ItemGroup>
          <Menu.SubMenu id="sub3" title="submenu3">
            <Menu.Item id="it6">Item6</Menu.Item>
            <Menu.Item id="it7">Item7</Menu.Item>
            <Menu.Item id="it8">
              <a href="http://www.xiaokache.top/xkcBlog">Blog</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub4" title="submenu4">
          <Menu.Item id="it9">Item9</Menu.Item>
          <Menu.Item id="it10">Item10</Menu.Item>
          <Menu.Item id="it11">Item11</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )
}
```


```tsx
import React from "react";
import { Menu } from "docs";

export default () => {
  return (
    <>
      <Menu
        onChange={(val) => {
          console.log(val);
        }}
        mode="horizontal"
      >
        <Menu.SubMenu id="sub1" title="submenu1 - horizontal">
          <Menu.Item id="it1">Item1</Menu.Item>
          <Menu.Item id="it2">Item2</Menu.Item>
          <Menu.Item id="it3">Item3</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2" title="submenu2 - horizontal">
          <Menu.ItemGroup title="ItemGroup1">
            <Menu.Item id="it4">Item4</Menu.Item>
            <Menu.Item id="it5">Item5</Menu.Item>
          </Menu.ItemGroup>
          <Menu.SubMenu id="sub3" title="submenu3">
            <Menu.Item id="it6">Item6</Menu.Item>
            <Menu.Item id="it7">Item7</Menu.Item>
            <Menu.Item id="it8">
              <a href="http://www.xiaokache.top/xkcBlog">Blog</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub4" title="submenu4 - horizontal">
          <Menu.Item id="it9">Item9</Menu.Item>
          <Menu.Item id="it10">Item10</Menu.Item>
          <Menu.Item id="it11">Item11</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )
}
```


```tsx
import React from "react";
import { Menu } from "docs";

export default () => {
  return (
    <div>
      <Menu
        onChange={(val) => {
          console.log(val);
        }}
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={["it7"]}
        defaultOpenKeys={["sub1"]}
      >
        <Menu.SubMenu id="sub1" title="submenu1 - horizontal">
          <Menu.Item id="it1">Item1</Menu.Item>
          <Menu.Item id="it2">Item2</Menu.Item>
          <Menu.Item id="it3">Item3</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2" title="submenu2 - horizontal">
          <Menu.ItemGroup title="ItemGroup1">
            <Menu.Item id="it4">Item4</Menu.Item>
            <Menu.Item id="it5">Item5</Menu.Item>
          </Menu.ItemGroup>
          <Menu.SubMenu id="sub3" title="submenu3">
            <Menu.Item id="it6">Item6</Menu.Item>
            <Menu.Item id="it7">Item7</Menu.Item>
            <Menu.Item id="it8">
              <a href="http://www.xiaokache.top/xkcBlog">Blog</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub4" title="submenu4 - horizontal">
          <Menu.Item id="it9">Item9</Menu.Item>
          <Menu.Item id="it10">Item10</Menu.Item>
          <Menu.Item id="it11">Item11</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}
```

## API

| 属性                | 说明                                         | 类型                                 | 默认值     |
| ------------------- | -------------------------------------------- | ------------------------------------ | ---------- |
| mode                | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` | `horizontal` | `inline` | `vertical` |
| style               | 根节点样式                                   | CSSProperties                        | -          |
| theme               | 主题颜色                                     | `light` | `dark`                     | `light`    |
| defaultSelectedKeys | 初始选中的菜单项 key 数组                    | string[]                             | -          |
| defaultOpenKeys     | 初始展开的 SubMenu 菜单项 key 数组           | string[]                             | -          |
| onClick             | 点击 MenuItem 调用此函数                     | function                             | -          |

### Menu.SubMenu

| 属性  | 说明       | 类型      | 默认值 |
| ----- | ---------- | --------- | ------ |
| icon  | 菜单图标   | ReactNode | -      |
| title | 子菜单项值 | string    | -      |
| id    | 唯一标志   | string    | -      |

### Menu.ItemGroup

| 属性  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| title | 分组标题 | string | -      |

### Menu.Item

| 属性     | 说明                     | 类型   | 默认值 |
| -------- | ------------------------ | ------ | ------ |
| id       | item 的唯一标志          | string | -      |
| children | 设置收缩时展示的悬浮标题 | string | -      |

