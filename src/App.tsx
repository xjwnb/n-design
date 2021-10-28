/*
 * @Author: your name
 * @Date: 2021-10-27 11:38:45
 * @LastEditTime: 2021-10-28 14:37:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \n-design\src\App.tsx
 */
import React, { SyntheticEvent } from "react";
import "./App.css";
// Components
import { Button } from "./components/index";
import { Left, Right, Search } from "./Icons/icon/index";

function App() {
  
  /**
   * 按钮点击事件
   */
  const handleButtonClick = function (event: SyntheticEvent) {
    console.log(event);
  }

  return (
    <div className="App">
      {/* 按钮 Button */}
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

      {/* Icon */}
      <h1>Icon</h1>
      <Left />
      <Right />
      <Search />
    </div>
  );
}

export default App;
