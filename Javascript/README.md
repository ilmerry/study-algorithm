# nodejs input 방법

```js
// n이 맨 첫줄에 주어지고 두번째줄부터 n개의 수가 주어지는 경우
const fs = require("fs");
const [n, ...input] = fs.readFileSync("./stdin").toString().trim().split("\n");
```

# 다이나믹 or 그리디 문제에서 경우의 수가 두 갈래인 경우

큰 수로 나눠도 도저히 안된다 -> 작은수를 우선순위에 두고 다시 해볼것
ex) BOJ 2839번
