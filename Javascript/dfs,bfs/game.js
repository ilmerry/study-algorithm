function solution(maps) {
  var answer = 0;
  const n = maps[0].length;
  const m = maps.length;
  console.log(maps);

  const bfs = (graph, [startX, startY]) => {
    const visited = new Set();
    const queue = [];

    queue.push([startX, startY]);
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      if (!visited.has([x, y])) {
        //console.log(x, y);
        visited.add([x, y]);
        answer += 1;

        if (x === n - 1 && y === m - 1) break;

        if (x + 1 < n && graph[x + 1][y] === 1) {
          if (!visited.has([x + 1, y])) {
            queue.push([x + 1, y]);
          }
        } else if (y + 1 < m && graph[x][y + 1] === 1) {
          if (!visited.has([x, y + 1])) {
            queue.push([x, y + 1]);
          }
        } else if (x - 1 > 0 && graph[x - 1][y] === 1) {
          if (!visited.has([x - 1, y])) {
            queue.push([x - 1, y]);
          }
        } else if (y - 1 > 0 && graph[x][y - 1] === 1) {
          if (!visited.has([x, y - 1])) {
            queue.push([x, y - 1]);
          }
        }
      }
    }

    if (!visited.has([n - 1, m - 1])) {
      return -1;
    } else {
      return answer;
    }
  };

  answer = bfs(maps, [0, 0]);
  console.log(answer);

  return answer;
}
