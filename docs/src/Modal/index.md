
# Modal 对话框

## 代码演示

```tsx
import React, { useState } from "react";
import { Modal, Button } from "docs";

export default () => {
  const [isShowModal, setisShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setisShowModal(true)}>Modal</Button>
      <Modal
        title="Basic Modal"
        visible={isShowModal}
        onCancel={() => setisShowModal(false)}
        onOk={() => {
          console.log("确定");
        }}
      >
        12312
      </Modal>
    </>
  )
}
```


```tsx
import React, { useState } from "react";
import { Modal, Button } from "docs";

export default () => {
  const [isShowModal, setisShowModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          Modal.info({
            title: "Info",
            content: "什么玩意儿",
          });
        }}
      >
        Info
      </Button>&emsp;
      <Button
        onClick={() => {
          Modal.success({
            title: "Success",
            content: "什么玩意儿",
          });
        }}
      >
        Success
      </Button>&emsp;
      <Button
        onClick={() => {
          Modal.error({
            title: "Error",
            content: "什么玩意儿",
          });
        }}
      >
        Error
      </Button>&emsp;
      <Button
        onClick={() => {
          Modal.warning({
            title: "Warning",
            content: "什么玩意儿",
          });
        }}
      >
        Warning
      </Button>
    </>
  )
}
```

## API

| 属性         | 说明                                                       | 类型             | 默认值         |
| ------------ | ---------------------------------------------------------- | ---------------- | -------------- |
| visible      | 对话框是否可见                                             | boolean          | false          |
| title        | 标题                                                       | ReactNode        | -              |
| width        | 宽度                                                       | string \| number | 520            |
| okText       | 确认按钮文字                                               | ReactNode        | `确定`         |
| cancelText   | 取消按钮文字                                               | ReactNode        | `取消`         |
| footer       | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode        | (确定取消按钮) |
| closable     | 是否显示右上角的关闭按钮                                   | boolean          | true           |
| closeIcon    | 自定义关闭图标                                             | ReactNode        | <Close />      |
| mask         | 是否展示遮罩                                               | boolean          | true           |
| maskClosable | 点击蒙层是否允许关闭                                       | boolean          | true           |
| maskStyle    | 遮罩样式                                                   | CSSProperties    |                |
| zIndex       | 设置 Modal 的 `z-index`                                    | number           | 1000           |
| onCancel     | 点击遮罩层或右上角叉或取消按钮的回调                       | function(e)      | -              |
| onOk         | 点击确定回调                                               | function(e)      | -              |

