
# Row Col

## 代码演示

```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={24}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={12}>
            <div className="col_container">什么玩意儿</div>
            </Col>
          <Col span={12}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={8}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={8}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={8}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row gutter={16}>
          <Col span={12}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={12}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row gutter={32}>
          <Col span={12}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={12}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row gutter={16}>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row gutter={[16, 24]}>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={6}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={8}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={8} offset={8}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={18} push={6}>
            <div className="col_container">右</div>
          </Col>
          <Col span={6} pull={18}>
            <div className="col_container1">左移</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row>
          <Col span={8}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={8} offset={8}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row justify="start">
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row justify="center">
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row justify="end">
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row justify="space-between">
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```


```tsx
import React from "react";
import { Row, Col } from "docs";
import "./index.css";

export default () => {
  return (
    <>
      <div className="row_container">
        <Row justify="space-around">
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container1">什么玩意儿</div>
          </Col>
          <Col span={4}>
            <div className="col_container">什么玩意儿</div>
          </Col>
        </Row>
      </div>
    </>
  )
}
```

## API

| 属性    | 说明                                                         | 类型                                                         | 默认值  |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| align   | 垂直对齐方式                                                 | `top` | `middle` | `bottom`                                  | `top`   |
| gutter  | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array                                    | 0       |
| justify | 水平排列方式                                                 | `start` | `end` | `center` | `space-around` | `space-between` | `start` |

