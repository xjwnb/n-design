
# Divider 分割线

## 代码演示
```tsx
import React from "react";
import { Divider } from "docs";

export default () => {

  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Sed nonne merninisti   licere mihi ista
       probare, quae sunt a te dicta? Refert   tamen, quo modo.
     </p>
     <Divider />
     <p>
       Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Sed nonne merninisti   licere mihi ista
       probare, quae sunt a te dicta? Refert   tamen, quo modo.
     </p>
     <Divider dashed />
     <p>
       Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Sed nonne merninisti   licere mihi ista
       probare, quae sunt a te dicta? Refert   tamen, quo modo.
     </p>
    </div>
  )
}
```

```tsx
import React from "react";
import { Divider } from "docs";

export default () => {

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider>Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="left">Left Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="right">Right Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  )
}
```


```tsx
import React from "react";
import { Divider } from "docs";

export default () => {

  return (
    <div>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
  )
}
```