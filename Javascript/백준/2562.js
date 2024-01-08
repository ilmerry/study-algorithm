const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const max = input.reduce((prev, curr) => {
  const num1 = parseInt(prev);
  const num2 = parseInt(curr);
  return num1 > num2 ? num1 : num2;
});
console.log(max);
console.log(input.indexOf(max.toString()) + 1);
