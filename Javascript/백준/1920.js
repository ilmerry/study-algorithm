const fs = require("fs");
const [n, nlist, m, mlist] = fs
  .readFileSync("./stdin")
  .toString()
  .trim()
  .split("\n");

const list = nlist
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const target = mlist.split(" ").map(Number);
const result = [];

for (let i = 0; i < m; i++) {
  let left = 0;
  let right = n - 1;
  result[i] = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target[i]) {
      result[i] = 1;
      break;
    }

    if (list[mid] > target[i]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

console.log(result.join("\n"));
