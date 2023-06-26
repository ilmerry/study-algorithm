// 프로그래머스(Lv.3): 네트워크
function solution(n, computers) {
  var answer = new Set();
  if (n === 1) return 1;

  // 인접리스트 만들기
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j] === 1) {
        graph[i] = graph[i].concat(j);
        graph[j] = graph[j].concat(i);
      }
    }
  }

  for (let i = 0; i < n; i++) answer.add(dfs(graph, i));

  return answer.size;
}

// dfs
const dfs = (graph, start) => {
  let result = [];
  const visited = new Set();
  const stack = [start];

  while (stack.length) {
    const com = stack.pop();
    if (!visited.has(com)) {
      result.push(com);
      visited.add(com);

      const neighbors = graph[com];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return result.sort().join();
};
