# Card 卡片

## 代码演示

```tsx
import React from "react";
import { Card } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Card
          title="Default size card"
          extra={<a href="http://xiaokachetop/xkcBlog/">More</a>}
        >
          什么玩意儿
        </Card>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Card } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Card
          size="small"
          title="Default size card"
          extra={<a href="http://xiaokache.op/xkcBlog/">More</a>}
        >
          什么玩意儿
        </Card>
      </div>
    </>
  )
}
```



```tsx
import React from "react";
import { Card } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div
        className="row_container"
        style={{
          background: "#ECECEC",
          padding: 20,
        }}
      >
        <Card
          size="small"
          title="Default size card"
          extra={<a href="http://xiaokach top/xkcBlog/">More</a>}
        >
          什么玩意儿
        </Card>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Card } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Card style={{ width: 300 }}>
          <p>Card 什么玩意儿</p>
          <p>Card 什么玩意儿</p>
          <p>Card 什么玩意儿</p>
        </Card>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Card } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>Card 什么玩意儿</p>
          <p>Card 什么玩意儿</p>
          <p>Card 什么玩意儿</p>
        </Card>
      </div>
    </>
  )
}
```