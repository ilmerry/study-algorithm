const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

for (let i = 1; i <= parseInt(input[0]); i++) {
  const [r, str] = input[i].split(" ");
  const p = str
    .split("")
    .map((char) => char.repeat(r))
    .join("");
  console.log(p);
}
