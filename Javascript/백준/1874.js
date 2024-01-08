const fs = require("fs");
const [n, ...input] = fs.readFileSync("./stdin").toString().trim().split("\n");

const stack = [];
let result = "";
for (let i = 0, cur = 1; i < n; i++) {
  const num = parseInt(input[i]);
  while (cur <= num) {
    stack.push(cur);
    result += "+";
    cur += 1;
  }
  if (stack[stack.length - 1] === num) {
    stack.pop();
    result += "-";
  } else {
    console.log("NO");
    result = "";
    break;
  }
}

if (result.length) {
  console.log(result.split("").join("\n"));
}
