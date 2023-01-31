# nodejs input 방법

```js
// n이 맨 첫줄에 주어지고 두번째줄부터 n개의 수가 주어지는 경우
const fs = require("fs");
const [n, ...input] = fs.readFileSync("./stdin").toString().trim().split("\n");
```
