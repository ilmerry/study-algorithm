function solution(rows, columns, queries) {
  var answer = [];
  let map = [...Array(rows)].map((v, r) =>
    [...Array(columns)].map((v, c) => r * columns + (c + 1))
  );

  queries.reduce((map, query) => {
    const graph = {};
    const [x1, y1, x2, y2] = query;
    for (let i = x1 - 1; i < x2; i++) {
      for (let j = y1 - 1; j < y2; j++) {
        if (i > x1 - 1 && i < x2 - 1 && j > y1 - 1 && j < y2 - 1) continue;
        if (i === x1 - 1 && j > y1 - 1) graph[map[i][j]] = map[i][j - 1];
        if (j === y2 - 1 && i > x1 - 1) graph[map[i][j]] = map[i - 1][j];
        if (i === x2 - 1 && j < y2 - 1) graph[map[i][j]] = map[i][j + 1];
        if (j === y1 - 1 && i < x2 - 1) graph[map[i][j]] = map[i + 1][j];
      }
    }
    for (let i = x1 - 1; i < x2; i++) {
      for (let j = y1 - 1; j < y2; j++) {
        if (i > x1 - 1 && i < x2 - 1 && j > y1 - 1 && j < y2 - 1) continue;
        map[i][j] = graph[map[i][j]];
      }
    }

    answer.push(Math.min(...Object.keys(graph)));

    return map;
  }, map);

  return answer;
}
