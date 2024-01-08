const fs = require("fs");
const [n, ...input] = fs.readFileSync("./stdin").toString().trim().split("\n");

const arr = Array.from(new Set(input)).sort((a, b) => {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        return 1;
      } else if (a[i] < b[i]) {
        return -1;
      }
    }
  } else {
    return a.length - b.length;
  }
});

arr.forEach((str) => console.log(str));
