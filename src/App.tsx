/*
 * @Author: your name
 * @Date: 2021-10-27 11:38:45
 * @LastEditTime: 2021-10-29 14:26:31
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
import { Button, Input } from "./components/index";
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
        />
      </div>
    </div>
  );
}

export default App;
