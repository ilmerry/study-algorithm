const fs = require("fs");
const [t, ...list] = fs
  .readFileSync("./stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = new Array(t);

list.forEach((n) => {
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      dp[i] = 0;
    } else if (i === 1) {
      dp[i] = 1;
    } else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }

  if (n === 0) {
    console.log(1, dp[n]);
  } else {
    console.log(dp[n - 1], dp[n]);
  }
});
