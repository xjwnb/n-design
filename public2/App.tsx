/*
 * @Author: your name
 * @Date: 2021-10-27 11:38:45
 * @LastEditTime: 2022-01-04 08:41:54
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
import {
  Button,
  Input,
  Radio,
  Switch,
  Image,
  Layout,
  Space,
  Select,
  Pagination,
  Form,
  Row,
  Col,
  Checkbox,
  Tabs,
  Divider,
  Card,
  Table,
  Tooltip,
  Carousel,
  Menu,
  DatePicker,
  Modal,
  message,
  Drawer,
  Cascader,
  BackTop,
  Tag,
  Collapse,
  Progress,
  Rate,
  Transfer,
  Alert,
} from "./components/index";
import {
  Left,
  Right,
  Search,
  Loading,
  BackTop as backTop,
  Bottom,
  BoxEmpty,
  Calendar,
  Close,
  Closefill,
  DoubleLeft,
  DoubleRight,
  Enlarge,
  Error,
  ErrorFill,
  EyeClose,
  EyeOpen,
  FivePointedStar,
  Info,
  Infofill,
  Narrow,
  RotateLeft,
  RotateRight,
  Success,
  SuccessFill,
  SwapRight,
  True,
  WarningCircle,
  WarningFill,
} from "./Icons/icon/index";

function App() {
  const [inputValue] = useState("");
  const [isShowModal, setisShowModal] = useState(false);
  const [dataSourceList, setdataSourceList] = useState<
    Array<{
      key: string | number;
      name: string;
      age: number;
      sex: string;
    }>
  >([]);
  const [showDrawer, setshowDrawer] = useState(false);

  const [percent, setpercent] = useState(0);

  useEffect(() => {
    let timer: any = null;
    clearTimeout(timer);
    if (percent === 100) {
      return;
    }
    timer = setTimeout(() => {
      if (percent === 100) {
        clearTimeout(timer);
      }
      setpercent((per) => per + 1);
    }, 1000);
  }, [percent]);

  useEffect(() => {
    let data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: "小卡车" + i,
        age: 21,
        sex: "男",
      });
    }
    setdataSourceList(data);
  }, []);

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
    // console.log(event);
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

  /**
   * select Change
   */
  const handleSelectChange = function (value: string) {
    // console.log(value);
  };

  /**
   * Pagination 分页 change
   */
  const handlePaginationChange = function (
    current: number,
    defaultPageSize: number
  ) {
    console.log(current, defaultPageSize);
  };

  useEffect(() => {
    // console.log(inputValue);
  }, [inputValue]);

  const colors = [
    "pink",
    "red",
    "yellow",
    "orange",
    "cyan",
    "green",
    "blue",
    "purple",
    "geekblue",
    "magenta",
    "volcano",
    "gold",
    "lime",
  ];

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

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

        <Input
          placeholder="开始操作......"
          value={inputValue}
          onChange={handleInputChange}
          // prefix={<Search />}
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

        <br />
        <Input allowClear />
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

        <Image.PreviewGroup>
          <Image
            src="https://xkc-oss-bucket.oss-cn-guangzhou.aliyuncs.com/descriptionPicture/1612895649258_preview.jpg?versionId=CAEQCRiBgICFg6WgvBciIGYzZjM5YTFlYzcxZjRlMDZhMWFjZDIyMGJmNWM4ZDNh"
            width={200}
          />
          <Image
            src="https://xkc-oss-bucket.oss-cn-guangzhou.aliyuncs.com/descriptionPicture/1612949921591_author2.jpg?versionId=CAEQCRiBgMCSrZ2tvBciIGNlYWE5NDU4Y2FlZTQ1ZDFhMGIwYmMzZGY2ODU2NzVj"
            width={200}
          />
        </Image.PreviewGroup>
      </div>

      {/* Layout */}
      <div>
        <h1>Layout</h1>
        <Layout>
          <Layout.Header>Header</Layout.Header>
          <Layout.Content>Content</Layout.Content>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>

        <Layout>
          <Layout.Header>Header</Layout.Header>
          <Layout>
            <Layout.Sider>Sider</Layout.Sider>
            <Layout.Content>Content</Layout.Content>
          </Layout>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
      </div>

      {/* space */}
      <div>
        <h1>Space</h1>
        <Space>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
        </Space>
        <br />
        <br />
        <Space size="middle">
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
        </Space>
        <br />
        <br />
        <Space size="large">
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
          <Button>什么东西</Button>
        </Space>
        <br />
        <br />
        <div className="box">
          <Space align="start">
            什么东西 什么东西
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <span>什么东西</span>
            <span>什么东西</span>
          </Space>
        </div>
        <br />
        <br />
        <div className="box">
          <Space align="end">
            什么东西 什么东西
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <span>什么东西</span>
            <span>什么东西</span>
          </Space>
        </div>
        <br />
        <br />
        <div className="box">
          <Space align="center">
            什么东西 什么东西
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <span>什么东西</span>
            <span>什么东西</span>
          </Space>
        </div>
        <br />
        <br />

        <div className="box">
          <Space align="baseline">
            什么东西 什么东西
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <span>什么东西</span>
            <span>什么东西</span>
          </Space>
        </div>

        <br />
        <br />

        <div className="box">
          <Space wrap size={[8, 16]}>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
            <Button>什么东西</Button>
          </Space>
        </div>
      </div>

      {/* select */}
      <div>
        <h1>Select</h1>
        <div className="select_container">
          <Select
            placeholder="你选什么东西"
            defaultValue="2"
            onChange={handleSelectChange}
          >
            <Select.Option value="1">什么东西</Select.Option>
            <Select.Option value="2">什么东西啊</Select.Option>
            <Select.Option value="3" disabled>
              什么东西...
            </Select.Option>
            <Select.Option value="4">什么东西，秀儿</Select.Option>
          </Select>
          <Select placeholder="你选什么东西" defaultValue="2" disabled>
            <Select.Option value="1">什么东西</Select.Option>
            <Select.Option value="2">什么东西啊</Select.Option>
          </Select>
          <Select placeholder="你选什么东西" defaultValue="2" allowClear>
            <Select.Option value="1">什么东西</Select.Option>
            <Select.Option value="2">什么东西啊</Select.Option>
          </Select>
          <Select
            style={{ width: 300 }}
            placeholder="你选什么东西"
            defaultValue="2"
            showSearch
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
          <Button>什么玩意儿</Button>
          <Select
            mode="multiple"
            style={{ width: 300 }}
            placeholder="你选什么东西"
            defaultValue={["A", "b", "C", "H", "J"]}
            onChange={handleSelectChange}
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
        </div>
      </div>

      {/* Pagination */}
      <div>
        <h1>Pagination</h1>
        <Pagination
          total={100}
          onChange={handlePaginationChange}
          showTotal={(total) => `共${total}条数据`}
          showQuickJumper
        />
        <Pagination
          total={100}
          onChange={handlePaginationChange}
          showTotal={(total) => `共${total}条数据`}
          // showQuickJumper
        />
        <Pagination total={100} disabled />
      </div>

      {/* Row - Col */}
      <div>
        <h1>Row Col</h1>
        <div className="row_container">
          <Row>
            <Col span={24}>
              <div className="col_container">什么玩意儿</div>
            </Col>
          </Row>
        </div>

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

        <div className="row_container">
          <Row>
            <Col span={18} push={6}>
              <div className="col_container">右移</div>
            </Col>
            <Col span={6} pull={18}>
              <div className="col_container1">左移</div>
            </Col>
          </Row>
        </div>

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
      </div>

      {/* form */}
      <div>
        <h1>Form</h1>
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

          <Form.Item label="是否打开" name="isOpen">
            <Switch />
          </Form.Item>

          <Form.Item label="单选" name="radio">
            <Radio.Group>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3} disabled>
                C
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* checkbox */}
      <div>
        <h1>Checkbox</h1>
        <Checkbox onChange={(e: any) => console.log(e.target.checked)}>
          什么玩意儿
        </Checkbox>
        <Checkbox defaultChecked={true} disabled>
          什么玩意儿
        </Checkbox>
        <br />
        <Checkbox.Group
          options={[
            {
              label: "a",
              value: "a",
            },
            {
              label: "b",
              value: "b",
            },
            {
              label: "c",
              value: "c",
              disabled: true,
            },
          ]}
        />
        <br />
        <Checkbox.Group
          options={[
            {
              label: "a",
              value: "a",
            },
            {
              label: "b",
              value: "b",
            },
            {
              label: "c",
              value: "c",
            },
          ]}
          defaultValue={["a", "b"]}
        />
      </div>

      {/* Tabs */}
      <div>
        <h1>Tabs</h1>
        <Tabs
          onChange={(key: string) => {
            console.log(key);
          }}
          onTabClick={(key: string, event: BaseSyntheticEvent) => {
            console.log(key, event);
          }}
        >
          <Tabs.TabPane tab="什么玩意儿1" id="1">
            什么玩意儿1
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿2" id="2">
            什么玩意儿2
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
            什么玩意儿3
          </Tabs.TabPane>
        </Tabs>
        <br />
        <Tabs centered>
          <Tabs.TabPane tab="什么玩意儿1" id="1">
            什么玩意儿1
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿2" id="2">
            什么玩意儿2
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
            什么玩意儿3
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <Loading /> 什么玩意儿4
              </span>
            }
            id="4"
          >
            什么玩意儿4
          </Tabs.TabPane>
        </Tabs>
        <br />
        <Tabs tabPosition="bottom">
          <Tabs.TabPane tab="什么玩意儿1" id="1">
            什么玩意儿1
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿2" id="2">
            什么玩意儿2
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
            什么玩意儿3
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <Loading /> 什么玩意儿4
              </span>
            }
            id="4"
          >
            什么玩意儿4
          </Tabs.TabPane>
        </Tabs>
        <br />
        <Tabs tabPosition="left">
          <Tabs.TabPane tab="什么玩意儿1" id="1">
            什么玩意儿1
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿2" id="2">
            什么玩意儿2
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
            什么玩意儿3
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <Loading /> 什么玩意儿4
              </span>
            }
            id="4"
          >
            什么玩意儿4
          </Tabs.TabPane>
        </Tabs>
        <br />
        <Tabs tabPosition="right">
          <Tabs.TabPane tab="什么玩意儿1" id="1">
            什么玩意儿1
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿2" id="2">
            什么玩意儿2
          </Tabs.TabPane>
          <Tabs.TabPane tab="什么玩意儿3" disabled id="3">
            什么玩意儿3
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <Loading /> 什么玩意儿4
              </span>
            }
            id="4"
          >
            什么玩意儿4
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* Divider */}
      <div>
        <h1>Divider</h1>
        <Divider />
        <br />
        <Divider dashed />
        <br />
        <Divider>Text</Divider>
        <br />
        <Divider orientation="left">Text</Divider>
        <br />
        <Divider orientation="right">Text</Divider>
        <br />
        <div>
          Text1 <Divider type="vertical" /> Text2 <Divider type="vertical" />
          Text3
        </div>
      </div>

      {/* Card */}
      <div>
        <h1>Card</h1>
        <div className="row_container">
          <Card
            title="Default size card"
            extra={<a href="http://xiaokache.top/xkcBlog/">More</a>}
          >
            什么玩意儿
          </Card>
        </div>

        <div className="row_container">
          <Card
            size="small"
            title="Default size card"
            extra={<a href="http://xiaokache.top/xkcBlog/">More</a>}
          >
            什么玩意儿
          </Card>
        </div>

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
            extra={<a href="http://xiaokache.top/xkcBlog/">More</a>}
          >
            什么玩意儿
          </Card>
        </div>

        <div className="row_container">
          <Card style={{ width: 300 }}>
            <p>Card 什么玩意儿</p>
            <p>Card 什么玩意儿</p>
            <p>Card 什么玩意儿</p>
          </Card>
        </div>

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
      </div>

      {/* Table */}
      <div>
        <h1>Table</h1>
        <Table
          rowSelection={{
            type: "checkbox",
            onChange: (keyList: any, selectRows: any) => {
              // console.log(keyList, selectRows);
            },
          }}
          columns={[
            {
              key: "name",
              title: "Name",
              dataIndex: "name",
            },
            {
              key: "age",
              title: "Age",
              dataIndex: "age",
              render: (text) => {
                return <span>{text}岁</span>;
              },
            },
            {
              key: "sex",
              title: "Sex",
              dataIndex: "sex",
            },
            {
              key: "action",
              title: "Action",
              dataIndex: "action",
              render: (_, record) => (
                <Button
                  onClick={() => {
                    console.log(record);
                  }}
                  type="link"
                  danger
                >
                  Delete
                </Button>
              ),
            },
          ]}
          dataSource={dataSourceList}
        />

        <br />
        <Table
          columns={[
            {
              key: "name",
              title: "Name",
              dataIndex: "name",
            },
            {
              key: "age",
              title: "Age",
              dataIndex: "age",
              render: (text) => {
                return <span>{text}岁</span>;
              },
            },
            {
              key: "sex",
              title: "Sex",
              dataIndex: "sex",
            },
            {
              key: "action",
              title: "Action",
              dataIndex: "action",
              render: (_, record) => (
                <Button
                  onClick={() => {
                    console.log(record);
                  }}
                  type="link"
                  danger
                >
                  Delete
                </Button>
              ),
            },
          ]}
          dataSource={dataSourceList}
        />
      </div>

      {/* Tooltip */}
      <div>
        <h1>ToolTip</h1>
        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意">什么玩意儿</Tooltip>
        </div>
        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意">
            <Button>什么玩意儿</Button>
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意">
            <Search />
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ...">top.........</Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ............" placement="topLeft">
            topLeft....................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ............" placement="topRight">
            topRight.............................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ..." placement="left">
            left.....................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ............." placement="right">
            <div
              style={{
                width: 100,
                height: 100,
                background: "#eee",
              }}
            >
              right............................
            </div>
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ..............." placement="bottom">
            bottom...................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ................" placement="leftTop">
            leftTop..............................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ..............." placement="leftBottom">
            leftBottom.............................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ................" placement="rightTop">
            rightTop.........................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ............." placement="rightBottom">
            rightBottom.........................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ..........." placement="bottomLeft">
            bottomLeft.................
          </Tooltip>
        </div>

        <div
          style={{
            margin: 50,
            display: "inline-block",
          }}
        >
          <Tooltip title="什么玩意... ..........." placement="bottomRight">
            bottomRight................
          </Tooltip>
        </div>
        <br />
        <br />
        {colors.map((item) => (
          <Tooltip key={item} title={item} color={item}>
            <Button>{item}</Button>
          </Tooltip>
        ))}
      </div>

      {/* Carousel */}
      <div>
        <h1>Carousel</h1>
        <Carousel>
          <div
            style={{
              width: "100%",
              height: 300,
              textAlign: "center",
              background: "orange",
              lineHeight: "300px",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              1
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              height: 300,
              textAlign: "center",
              background: "orange",
              lineHeight: "300px",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              2
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              height: 300,
              textAlign: "center",
              background: "orange",
              lineHeight: "300px",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              3
            </h1>
          </div>
        </Carousel>
        <br />
        <br />
        <Carousel autoplay>
          <div
            style={{
              width: "100%",
              height: 300,
              textAlign: "center",
              background: "orange",
              lineHeight: "300px",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              1
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              height: 300,
              textAlign: "center",
              background: "orange",
              lineHeight: "300px",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              2
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              height: 300,
              textAlign: "center",
              background: "orange",
              lineHeight: "300px",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              3
            </h1>
          </div>
        </Carousel>
      </div>

      {/* Menu */}
      <div>
        <h1>Menu</h1>
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
        <br />
        <br />
        theme = "dark"
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
        <br />
        <br />
        mode="inline" theme="light"
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
        <br />
        <br />
        mode="inline" theme="dark"
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
        <br />
        <br />
        mode="horizontal"
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
        <br />
        <br />
        mode="horizontal" theme="dark"
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
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
        </ul>
      </div>

      {/* DatePicker */}
      <div
        style={{
          height: 500,
        }}
      >
        <h1>DatePicker</h1>
        <DatePicker
          onChange={(val) => {
            console.log(val);
          }}
        />
        <br />
        <DatePicker
          picker="week"
          onChange={(val) => {
            console.log(val);
          }}
        />
        <br />
        <DatePicker
          picker="month"
          onChange={(val) => {
            console.log(val);
          }}
        />
        <br />
        <DatePicker
          picker="year"
          onChange={(val) => {
            console.log(val);
          }}
        />
        <br />

        <DatePicker.RangePicker
          onChange={(dateTime: Date[], dateStr: string[]) => {
            console.log(dateTime, dateStr);
          }}
        />
      </div>

      {/* Modal */}
      <div>
        <h1>Modal</h1>
        <Button onClick={() => setisShowModal(true)}>Modal</Button>
        <Modal
          width={1000}
          title="Basic Modal"
          visible={isShowModal}
          onCancel={() => setisShowModal(false)}
          onOk={() => {
            console.log("确定");
          }}
          okText={"确认按钮..."}
          cancelText={"取消按钮..."}
          // mask={false}
        >
          12312
        </Modal>
        <br />
        <Button
          onClick={() => {
            Modal.info({
              title: "Info",
              content: "什么玩意儿",
            });
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            Modal.success({
              title: "Success",
              content: "什么玩意儿",
            });
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            Modal.error({
              title: "Error",
              content: "什么玩意儿",
            });
          }}
        >
          Error
        </Button>
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
      </div>

      {/* Message */}
      <div>
        <h1>Message</h1>
        <Button
          onClick={() => {
            message.info("info 内容");
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            message.success("success 内容", 0);
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            message.error("error 内容");
          }}
        >
          Error
        </Button>
        <Button
          onClick={() => {
            message.warning("warning 内容");
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            message.warning({
              content: "config 是对象",
              onClick: () => console.log("点击了什么玩意儿"),
            });
          }}
        >
          Warning config = Object
        </Button>
      </div>

      {/* Drawer */}
      <div>
        <h1>Drawer 抽屉</h1>
        <Button onClick={() => setshowDrawer(true)}>Drawer</Button>
        <Drawer
          title="什么玩意啊"
          visible={showDrawer}
          placement="right"
          onClose={() => setshowDrawer(false)}
        >
          123... 什么玩意啊
        </Drawer>
      </div>

      {/* Cascader */}
      <div
        style={{
          height: 500,
        }}
      >
        <h1>Cascader</h1>
        <Cascader
          placeholder="什么玩意"
          options={options}
          onChange={(val: any) => console.log(val)}
        />
      </div>

      <div>
        <h1>BackTop 置顶</h1>
        <BackTop />

        <div
          id="backTop"
          style={{
            height: 500,
            border: "1px solid #1890ff",
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              height: 2000,
            }}
          ></div>
          <BackTop target={() => document.getElementById("backTop")}>
            <div
              style={{
                height: 40,
                width: 40,
                lineHeight: "40px",
                borderRadius: 4,
                backgroundColor: "#1088e9",
                color: "#fff",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              UP
            </div>
          </BackTop>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
      </div>

      <div>
        <h1>Tag 标签</h1>
        <Tag>什么玩意</Tag>&emsp;
        <Tag color="success">什么玩意</Tag>&emsp;
        <Tag color="blue">什么玩意</Tag>&emsp;
        <Tag color="purple">
          <a href="http://www.xiaokache.top/desigin/button">Link</a>
        </Tag>
        &emsp;
        <Tag
          color="blue"
          closable
          onClose={(e) => {
            console.log("点击了关闭");
          }}
        >
          什么玩意
        </Tag>
        &emsp;
        <Tag color="success">什么玩意</Tag>&emsp;
        <Tag color="#f50">#f50</Tag>&emsp;
        <Tag color="success" icon={<Loading />}>
          什么玩意
        </Tag>
        &emsp;
      </div>

      <div>
        <h1>Collapse</h1>
        <Collapse
          onChange={(val) => {
            console.log(val);
          }}
          defaultActiveKey={["2"]}
        >
          <Collapse.Pancel id="1" header="什么玩意1">
            什么玩意儿 children1
          </Collapse.Pancel>
          <Collapse.Pancel id="2" header="什么玩意2">
            什么玩意儿 children2
          </Collapse.Pancel>
          <Collapse.Pancel id="3" header="什么玩意3">
            什么玩意儿 children3
          </Collapse.Pancel>
        </Collapse>
        <br />
        <br />
        手风琴
        <Collapse
          onChange={(val) => {
            console.log(val);
          }}
          accordion
        >
          <Collapse.Pancel id="1" header="什么玩意1">
            什么玩意儿 children1
          </Collapse.Pancel>
          <Collapse.Pancel id="2" header="什么玩意2">
            什么玩意儿 children2
          </Collapse.Pancel>
          <Collapse.Pancel id="3" showArrow={false} header="什么玩意3">
            什么玩意儿 children3
          </Collapse.Pancel>
        </Collapse>
        ghost
        <Collapse
          onChange={(val) => {
            console.log(val);
          }}
          ghost
        >
          <Collapse.Pancel id="1" header="什么玩意1">
            什么玩意儿 children1
          </Collapse.Pancel>
          <Collapse.Pancel id="2" header="什么玩意2">
            什么玩意儿 children2
          </Collapse.Pancel>
          <Collapse.Pancel id="3" showArrow={false} header="什么玩意3">
            什么玩意儿 children3
          </Collapse.Pancel>
        </Collapse>
      </div>

      <div>
        <h1>Progress</h1>
        <Progress percent={80} />
        <Progress percent={80} status={"exception"} />
        <Progress percent={100} />
        <Progress percent={100} showInfo={false} />
        <br />
        <br />
        <Progress size="small" percent={80} />
        <Progress size="small" percent={80} status={"exception"} />
        <Progress size="small" percent={100} />
        <Progress size="small" percent={100} showInfo={false} />

        <Progress type="circle" percent={80} />
        <Progress type="circle" percent={80} status="exception" />
        <Progress type="circle" percent={100} />

        {/* <Progress type="circle" percent={percent} />
        <Progress type="circle" percent={percent} width={80} />
        <Progress
          type="circle"
          percent={percent}
          width={80}
          strokeLinecap="square"
        /> */}
      </div>

      <div>
        <h1>Rate</h1>
        <Rate value={4} />
        <Rate value={4} count={10} />
        <Rate
          allowHalf
          value={4.5}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Rate
          character={<Search />}
          value={3}
          allowHalf
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Rate
          character={"A"}
          value={3}
          style={{
            fontSize: 50,
          }}
        />
        <Rate
          character={"A"}
          value={3}
          allowHalf
          style={{
            fontSize: 50,
          }}
        />
      </div>

      <div>
        <h1>Transfer</h1>
        <Transfer
          dataSource={[
            {
              key: "1",
              title: "title 1",
              description: "des 1",
              // disabled: true,
            },
            { key: "2", title: "title 2", description: "des 2" },
            { key: "3", title: "title 3", description: "des 3" },
            { key: "4", title: "title 4", description: "des 4" },
            {
              key: "5",
              title: "title 5",
              description: "des 5",
              // disabled: true,
            },
            { key: "6", title: "title 6", description: "des 6" },
          ]}
          titles={["Source", "target"]}
          targetKeys={["1", "2", "3"]}
          onChange={(
            nextTargetKeys: string[],
            direction: "left" | "right",
            moveKeys: string[]
          ) => {
            console.log(nextTargetKeys, direction, moveKeys);
          }}
          onSelectChange={(sourceKeys, targetKeys) => {
            console.log(sourceKeys, targetKeys);
          }}
          onScroll={(direction: "left" | "right", ele: any) => {
            console.log(direction, ele);
          }}
          // disabled
          // oneWay
        />
      </div>

      <div>
        <h1>Alert</h1>
        <Alert message="什么玩意儿" type="success" />
        <Alert message="什么玩意儿" type="info" />
        <Alert message="什么玩意儿" type="warning" />
        <Alert message="什么玩意儿" type="error" />
        <Alert message="什么玩意儿" type="info" closable />
        <Alert
          message="什么玩意儿"
          type="info"
          description="description 什么玩意儿啊23435443554345"
          closable
        />
        <Alert message="什么玩意儿" type="success" showIcon />
        <Alert message="什么玩意儿" type="info" showIcon />
        <Alert message="什么玩意儿" type="warning" showIcon />
        <Alert message="什么玩意儿" type="error" showIcon />
        <Alert
          message="什么玩意儿"
          type="success"
          description="description 什么玩意儿啊"
          closable
          showIcon
        />
        <Alert
          message="什么玩意儿"
          type="info"
          description="description 什么玩意儿啊"
          closable
          showIcon
        />
        <Alert
          message="什么玩意儿"
          type="warning"
          description="description 什么玩意儿啊"
          closable
          showIcon
        />
        <Alert
          message="什么玩意儿"
          type="error"
          description="description 什么玩意儿啊"
          closable
          showIcon
        />
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
      </div>

      <div></div>
    </div>
  );
}

export default App;
