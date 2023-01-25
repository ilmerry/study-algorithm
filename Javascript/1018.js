const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim();

/**
이거 아니면
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
이거
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
 */
// 이렇게 하면 첫번째 줄만 입력받을 수 있다
const [n, m] = input.substring(0, 5).split(" ").map(Number);
const board = input.substring(6).split("\n");

for (let i = 0; i < n - 8 + 1; i++) {
  for (let j = 0; j < m - 8 + 1; j++) {
    //console.log(board[i].substring(j, j + 8));
    //console.log(board[i].substring(j, j + 8).match("WBWBWBWB"));
    const subBoard =
      board[i].substring(j, j + 8) +
      "\n" +
      board[i + 1].substring(j, j + 8) +
      "\n" +
      board[i + 2].substring(j, j + 8) +
      "\n" +
      board[i + 3].substring(j, j + 8) +
      "\n" +
      board[i + 4].substring(j, j + 8) +
      "\n" +
      board[i + 5].substring(j, j + 8) +
      "\n" +
      board[i + 6].substring(j, j + 8) +
      "\n" +
      board[i + 7].substring(j, j + 8) +
      "\n";
    console.log(subBoard);
  }
}
