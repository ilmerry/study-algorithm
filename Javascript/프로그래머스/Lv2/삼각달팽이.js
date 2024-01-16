function solution(n) {
  var answer = [];
  const max = (n * (n + 1)) / 2;
  for (let i = 1; i <= n; i++) {
    answer.push(new Array(i).fill(0));
  }

  let [x, y] = [0, 0];
  let i = 1;
  while (i <= max) {
    while (y < n && !answer[y][x]) {
      answer[y++][x] = i++;
    }
    y--, x++;
    while (x < n && !answer[y][x]) {
      answer[y][x++] = i++;
    }
    y--, (x -= 2);
    while (x > 0 && y > 0 && !answer[y][x]) {
      answer[y--][x--] = i++;
    }
    (y += 2), x++;
  }

  return answer.flat();
}
