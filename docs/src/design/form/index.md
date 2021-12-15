# Form 表单

## 代码演示

```tsx
import React from "react";
import { Form, Select, Input, Radio, Button, Switch, Checkbox } from "docs";

export default () => {
  return (
    <>
      <Form 
        initialValues={{
          username: "小卡车",
          password: "123",
          // remember: true,
          select: "2",
          multiSelect: ["A", "b", "C", "H", "J"],
          isOpen: true,
          radio: 1,
        }} 
        onFinish={(val: any) => {
          console.log("表单值：", val);
        }}
        onFinishFailed={(result: any) => {
          console.log(result);
        }}
        labelCol={{ span: 3, offset: 3 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: "必填" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: "必选写密码" },
            { len: 6, message: "请输入6位密码" },
            { max: 11, message: "密码最大为11位" },
            { min: 8, message: "密码最小为8位" },
            { pattern: /[a-zA-Z]+/g, message: "正则验证" },
          ]}
        >
          <Input.Password placeholder="密码交出来" />
        </Form.Item>

        <Form.Item label="是否记住" name="remember">
          <Checkbox>什么玩意儿</Checkbox>
        </Form.Item>

        <Form.Item label="选择" name="select">
          <Select
            placeholder="你选什么东西儿"
            // defaultValue="2"
            // onChange={handleSelectChange}
          >
            <Select.Option value="1">什么东西</Select.Option>
            <Select.Option value="2">什么东西啊</Select.Option>
            <Select.Option value="3" disabled>
                什么东西...
            </Select.Option>
            <Select.Option value="4">什么东西，秀儿</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="多选"
          name="multiSelect"
          rules={[{ min: 6, message: "最少选择6个选项" }]}
        >
          <Select
            mode="multiple"
            placeholder="你选什么东西"
            // defaultValue={["A", "b", "C", "H", "J"]}
            // onChange={handleSelectChange}
          >
            <Select.Option value="1">什么东西</Select.Option>
            <Select.Option value="2">什么东西啊</Select.Option>
            <Select.Option value="3">A</Select.Option>
            <Select.Option value="4">AB</Select.Option>
            <Select.Option value="5">C</Select.Option>
            <Select.Option value="6">D</Select.Option>
            <Select.Option value="7">E</Select.Option>
            <Select.Option value="8">F</Select.Option>
            <Select.Option value="9">G</Select.Option>
            <Select.Option value="10">H</Select.Option>
            <Select.Option value="11">I</Select.Option>
            <Select.Option value="12">J</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
          label="是否打开" name="isOpen">
          <Switch />
        </Form.Item>

        <Form.Item label="单选" name="radio">
          <Radio.Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3} disabled>C</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
```

## API

| 属性           | 说明                                                         | 类型                                                         | 默认值 |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| labelCol       | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | object | -      |
| wrapperCol     | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol    | object | -      |
| initialValues  | 表单默认值，只有初始化以及重置时生效                         | object                                                       | -      |
| onFinish       | 提交表单且数据验证成功后回调事件                             | function(values)                                             | -      |
| onFinishFailed | 提交表单且数据验证失败后回调事件                             | function                                                     | -      |

