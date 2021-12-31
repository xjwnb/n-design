# Alert 警告提示

## 代码演示

```tsx
import React from "react";
import { Alert } from "docs";

export default () => {
  return (
    <>  
      <Alert message="什么玩意" />
    </>
  )
}
```


```tsx
import React from "react";
import { Alert } from "docs";
import "./index.css";

export default () => {
  return (
    <>  
      <div className="box-container">
        <Alert message="什么玩意儿" type="success" />
      </div>   
      <div className="box-container">
        <Alert message="什么玩意儿" type="info" />
      </div> 
      <div className="box-container">
        <Alert message="什么玩意儿" type="warning" />
      </div> 
      <div className="box-container">
        <Alert message="什么玩意儿" type="error" />
      </div>   
    </>
  )
}
```



```tsx
import React from "react";
import { Alert } from "docs";

export default () => {
  return (
    <>  
      <Alert message="什么玩意儿" type="info" closable />
    </>
  )
}
```



```tsx
import React from "react";
import { Alert } from "docs";
import "./index.css";

export default () => {
  return (
    <>  
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="success"
          description="description 什么玩意儿啊"
        />
      </div>
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="info"
          description="description 什么玩意儿啊"
        />
      </div>
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="warning"
          description="description 什么玩意儿啊"
        />
      </div>
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="error"
          description="description 什么玩意儿啊"
        />
      </div>
    </>
  )
}
```




```tsx
import React from "react";
import { Alert } from "docs";
import "./index.css";

export default () => {
  return (
    <> 
      <div className="box-container">
        <Alert message="什么玩意儿" type="success" showIcon />
      </div>   
      <div className="box-container">
        <Alert message="什么玩意儿" type="info" showIcon />
      </div> 
      <div className="box-container">
        <Alert message="什么玩意儿" type="warning" showIcon />
      </div> 
      <div className="box-container">
        <Alert message="什么玩意儿" type="error" showIcon />
      </div>  
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="success"
          description="description 什么玩意儿啊"
          showIcon
        />
      </div>
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="info"
          description="description 什么玩意儿啊"
          showIcon
        />
      </div>
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="warning"
          description="description 什么玩意儿啊"
          showIcon
        />
      </div>
      <div className="box-container">
        <Alert
          message="什么玩意儿"
          type="error"
          description="description 什么玩意儿啊"
          showIcon
        />
      </div>
    </>
  )
}
```



```tsx
import React from "react";
import { Alert } from "docs";

export default () => {
  return (
    <>  
      <Alert
        message="什么玩意儿"
        type="error"
        showIcon
        closable
        closeText="Close Button"
        onClose={(e) => {
          console.log(e);
        }}
      />
    </>
  )
}
```

## API

| 属性        | 说明                                                         | 类型                    | 默认值 |
| ----------- | ------------------------------------------------------------ | ----------------------- | ------ |
| message     | 警告提示内容                                                 | ReactNode\|string       | -      |
| description | 警告提示的辅助性文字介绍                                     | ReactNode\|string       | -      |
| type        | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string                  | `info` |
| closable    | 默认不显示关闭按钮                                           | boolean                 | -      |
| closeText   | 自定义关闭按钮                                               | ReactNode               | -      |
| showIcon    | 是否显示辅助图标                                             | boolean                 | false  |
| onClose     | 关闭时触发的回调函数                                         | (e: MouseEvent) => void | -      |

