<!--
 * @Author: 刘东升
 * @Date: 2021-08-10 17:54:12
 * @LastEditors: 刘东升
 * @LastEditTime: 2021-09-06 18:09:53
 * @Descripttion:
 * @version:
-->

---

title: '快速上手'

---

# 快速上手

```vue
<template>
    <div id="app">
        <s-button type="primary">点击报名</s-button>
    </div>
</template>

<script>
import { Button } from "zgd-ui-pc";
import "zgd-ui-pc/dist/sakura.css";

export default {
    name: "app",
    components: {
        "s-button": Button,
    },
};
</script>
```

<ClientOnly>
  <sakura-img/>
</ClientOnly>
