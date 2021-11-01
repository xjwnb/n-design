/*
 * @Author: your name
 * @Date: 2021-10-27 11:38:45
 * @LastEditTime: 2021-11-01 11:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\App.tsx
 */
import React, {
  SyntheticEvent,
  BaseSyntheticEvent,
  useState,
  useEffect,
} from "react";
import "./App.css";
// Components
import { Button, Input, Radio, Switch, Image } from "./components/index";
import { Left, Right, Search } from "./Icons/icon/index";

function App() {
  const [inputValue] = useState("");
  /**
   * 按钮点击事件
   */
  const handleButtonClick = function (event: SyntheticEvent) {
    console.log(event);
  };

  /**
   * 输入框 change
   */
  const handleInputChange = function (event: BaseSyntheticEvent) {
    console.log(event);
  };

  /**
   * 搜索框按钮点击
   */
  const handleSearch = function (value: string, event: BaseSyntheticEvent) {
    console.log(value, event);
  };

  /**
   * textarea 回车事件
   */
  const handlePressEnter = function (event: KeyboardEvent) {
    console.log(event);
  };

  /**
   * radio change
   */
  const handleRadioChange = function (event: BaseSyntheticEvent) {
    console.log(event);
  };

  /**
   * swich change
   */
  const handleSwitchChange = function (
    checked: boolean,
    event: BaseSyntheticEvent
  ) {
    console.log(checked, event);
  };

  useEffect(() => {
    // console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="App">
      {/* 按钮 Button */}
      <div>
        <h1>Button</h1>
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button shape="circle">A</Button>
        <Button shape="circle" icon={<Search />}></Button>
        <Button icon={<Search />}>Search</Button>
        <Button icon={<Search />} size="large">
          Search
        </Button>
        <br />
        <Button type="primary" block>
          Dashed Button
        </Button>
        <Button type="dashed" block>
          Dashed Button
        </Button>
        <Button type="text" block>
          Dashed Button
        </Button>
        <Button type="primary" disabled>
          Primary Button
        </Button>
        <Button type="dashed" disabled>
          Dashed Button
        </Button>
        <Button type="text" disabled>
          Dashed Button
        </Button>
        <Button type="link" disabled>
          Link Button
        </Button>

        <Button type="primary" danger>
          Primary Button
        </Button>
        <Button type="dashed" danger>
          Dashed Button
        </Button>
        <Button type="text" danger>
          Dashed Button
        </Button>
        <Button type="link" danger>
          Link Button
        </Button>

        <Button type="link" href="https://www.baidu.com" target="_blank" danger>
          跳转百度
        </Button>

        <Button type="link" onClick={handleButtonClick} danger>
          Click Handle
        </Button>
      </div>

      {/* Icon */}
      <div>
        <h1>Icon</h1>
        <Left />
        <Right />
        <Search />
      </div>

      {/* 输入框 Input */}
      <div>
        <h1>Input</h1>
        <Input
          placeholder="开始操作"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Input
          placeholder="开始操作"
          value={inputValue}
          onChange={handleInputChange}
          size="large"
        />
        <Input
          placeholder="开始操作"
          value={inputValue}
          onChange={handleInputChange}
          size="small"
        />
        <Input
          placeholder="开始操作"
          value={inputValue}
          onChange={handleInputChange}
          prefix={<Search />}
          suffix={<Left />}
        />
        <br />
        <br />
        {/* 密码框 */}
        <Input.Password placeholder="密码交出来" />
        <br />
        <br />
        {/* 搜索框 */}
        <Input.Search placeholder="查什么东西" width={200} />
        <Input.Search placeholder="查什么东西" width={200} enterButton />
        <Input.Search
          placeholder="查什么东西"
          width={200}
          enterButton="Search"
        />
        <Input.Search
          placeholder="查什么东西"
          width={200}
          allowClear
          enterButton="Search"
        />
        <Input.Search placeholder="查什么东西" width={200} loading />
        <Input.Search
          placeholder="查什么东西"
          width={200}
          loading
          enterButton="Search"
          onSearch={handleSearch}
        />

        {/* textarea */}
        <Input.TextArea onPressEnter={handlePressEnter} />
        <Input.TextArea bordered={false} />
      </div>

      {/* 单选 radio */}
      <div>
        <h1>Radio</h1>
        <Radio.Group value={1} onChange={handleRadioChange}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3} disabled>
            C
          </Radio>
        </Radio.Group>

        <Radio.Group value={2} onChange={handleRadioChange}>
          <Radio value={1}>a</Radio>
          <Radio value={2}>b</Radio>
          <Radio value={3}>c</Radio>
        </Radio.Group>

        <Radio.Group
          value={2}
          onChange={handleRadioChange}
          options={[
            {
              label: "LOL",
              value: "1",
            },
            {
              label: "使命召唤",
              value: "2",
            },
            {
              label: "绝地求生",
              value: "3",
              disabled: true,
            },
          ]}
        />

        <Radio.Group
          value={2}
          onChange={handleRadioChange}
          optionType="button"
          options={[
            {
              label: "LOL",
              value: "1",
            },
            {
              label: "使命召唤",
              value: "2",
            },
            {
              label: "绝地求生",
              value: "3",
              disabled: true,
            },
          ]}
        />
        <br />
        <br />
        <Radio.Group
          value={2}
          onChange={handleRadioChange}
          optionType="button"
          buttonStyle="solid"
          options={[
            {
              label: "LOL",
              value: "1",
            },
            {
              label: "使命召唤",
              value: "2",
            },
            {
              label: "绝地求生",
              value: "3",
              disabled: true,
            },
          ]}
        />
      </div>

      {/* switch */}
      <div>
        <h1>Switch</h1>
        <Switch defaultValue onChange={handleSwitchChange} />
        <Switch defaultValue onChange={handleSwitchChange} disabled />
        <Switch defaultValue checkedChildren="开启" unCheckedChildren="关闭" />
        <Switch
          defaultValue
          checkedChildren={<Left color="#fff" />}
          unCheckedChildren={<Right color="#fff" />}
        />
      </div>

      {/* Image */}
      <div>
        <h1>Image</h1>
        <Image
          // src="https://xkc-oss-bucket.oss-cn-guangzhou.aliyuncs.com/descriptionPicture/1612895649258_preview.jpg?versionId=CAEQCRiBgICFg6WgvBciIGYzZjM5YTFlYzcxZjRlMDZhMWFjZDIyMGJmNWM4ZDNh"
          src="err"
          fallback="data:image/png;base64,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"
          alt="背景图片"
          title="什么东西"
          width={200}
        />
      </div>
    </div>
  );
}

export default App;
