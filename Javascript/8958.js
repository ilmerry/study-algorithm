const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input.splice(1);

for (let i = 0; i < n; i++) {
  let total = 0;
  let cnt = 0;
  arr[i].split("").forEach((val) => {
    if (val === "O") {
      cnt++;
    } else {
      cnt = 0;
    }
    total += cnt;
  });
  console.log(total);
}
