const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const len = input[i].length;
  if (len === 1) {
    console.log("yes");
    continue;
  }
  for (let j = 0; j < Math.floor(len / 2); j++) {
    if (input[i][j] !== input[i][len - 1 - j]) {
      console.log("no");
      break;
    } else if (j === Math.floor(len / 2) - 1) {
      console.log("yes");
    }
  }
}
