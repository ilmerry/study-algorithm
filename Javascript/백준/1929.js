const fs = require("fs");
const [m, n] = fs
  .readFileSync("./stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = m; i <= n; i++) {
  if (i === 1) {
    continue;
  }
  if (i === 2) {
    console.log(2);
    continue;
  }
  let isPrime = true;
  for (let j = 2; j < Math.sqrt(i) + 1; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
