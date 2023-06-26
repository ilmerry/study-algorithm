function solution(maps) {
  const n = maps[0].length;
  const m = maps.length;
  const dy = [0, 0, 1, -1];
  const dx = [-1, 1, 0, 0];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [y, x, step] = queue.shift();

    if (y === m - 1 && x === n - 1) return step;

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny >= 0 && ny < m && nx >= 0 && nx < n && maps[ny][nx] === 1) {
        queue.push([ny, nx, step + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
}
