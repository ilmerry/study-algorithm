## nodejs input 방법

```js
// n이 맨 첫줄에 주어지고 두번째줄부터 n개의 수가 주어지는 경우
const fs = require("fs");
const [n, ...input] = fs.readFileSync("./stdin").toString().trim().split("\n");
```

## 문제풀이 tip

### 그리디

1. max, min과의 비교 -> stack을 사용해보자

### DP

1. 다이나믹 or 그리디 문제에서 경우의 수가 두 갈래인 경우

   - 큰 수로 나눠도 도저히 안된다 -> 작은수를 우선순위에 두고 다시 해볼 것
   - ex) BOJ 2839번

2. 그리디로 풀어서 막힌다면 DP를 쓰자

### 수학적 접근

1. 어떤 수를 계속 2로 나눈 나머지의 합 = 어떤 수를 2진수로 변환했을 때의 1의 개수 `n.toString(2).match(/1/g).length`

2. 최소공배수는 두 수의 곱을 두수의 최대공약수로 나눈 것과 같다.

## JS 메소드

- `str.startsWith`
- `stack.at(-1)` to get stack top
- `toString(몇진수)`
- use `replace(/0/g, "")` instead of filter
- `Math.min()`, `Math.max()` accepts str
- `str.charAt(idx)` is better than `str[idx]`
