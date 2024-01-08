const fs = require("fs");
let n = fs.readFileSync("./stdin");
let result = 0;

while (true) {
  if (n % 5 === 0) {
    console.log(result + n / 5);
    break;
  }

  if (n < 0) {
    console.log(-1);
    break;
  }

  n -= 3;
  result++;
}
