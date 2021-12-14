# Layout 布局

## 代码演示

```tsx
import React from "react";
import { Layout } from "docs";

export default () => {
  return (
    <div>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </div>
  )
}
```

```tsx
import React from "react";
import { Layout } from "docs";

export default () => {
  return (
    <div>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider>Sider</Layout.Sider>
          <Layout.Content>Content</Layout.Content>
        </Layout>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </div>
  )
}
```