function solution(board, moves) {
  let count = 0;
  const bucket = [];
  const boardStack = new Array(board[0].length)
    .fill(0)
    .map(() => new Array(board.length).fill(0));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      boardStack[j][i] = board[i][j];
    }
  }

  // for of 문을 쓰면 continue 사용이 가능하다
  moves.forEach((move) => {
    let pick = boardStack[move - 1].length && boardStack[move - 1].shift();
    while ((pick = boardStack[move - 1].length && boardStack[move - 1].shift()))
      pick = boardStack[move - 1].shift();

    if (bucket[bucket.length - 1] === pick) {
      bucket.pop();
      count += 2;
    } else if (pick > 0) {
      bucket.push(pick);
    }
  });

  return count;
}
