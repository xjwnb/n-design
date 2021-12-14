
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