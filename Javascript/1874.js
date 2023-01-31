const fs = require("fs");
const [n, ...input] = fs.readFileSync("./stdin").toString().trim().split("\n");

const stack = [];
const result = [];
for (let i = 1, j = 0; i <= n; i++) {
  if (i === input[j]) {
    console.log("-");
  } else {
    console.log("+");
  }
}
