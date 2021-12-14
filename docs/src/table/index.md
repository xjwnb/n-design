# Table 表格

## 代码演示

```tsx
import React, { useState, useEffect } from "react";
import { Table, Button } from "docs";

export default () => {
  const [dataSourceList, setdataSourceList] = useState([]);

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

  return (
    <>
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
    </>
  )
}
```

```tsx
import React, { useState, useEffect } from "react";
import { Table, Button } from "docs";

export default () => {
  const [dataSourceList, setdataSourceList] = useState([]);

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

  return (
    <>
      <Table
        rowSelection={{
          type: "checkbox",
          onChange: (keyList: any,selectRows: any) => {
            console.log(keyList, selectRows);
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
    </>
  )
}
```