const fs = require("fs");
const [info, ...list] = fs
  .readFileSync("./stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

const dfsResult = [];
const bfsResult = [];

// 인접 리스트로 변환
const graph = list.reduce((graph, [node1, node2]) => {
  graph[node1] = (graph[node1] || []).concat(node2).sort((a, b) => a - b);
  graph[node2] = (graph[node2] || []).concat(node1).sort((a, b) => a - b);
  return graph;
}, {});

// dfs
// 스택 버전
const dfs = (graph, startNode) => {
  const visited = new Set(); // 방문한 노드를 저장하기 위한 Set
  const stack = []; // 탐색해야할 노드

  stack.push(startNode);

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      // 해당 노드를 방문한 이력이 없다면
      dfsResult.push(node);
      visited.add(node); // 방문노드로 저장

      const neighbors = graph[node];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
};

// bfs
// 스택 버전
const bfs = (graph, startNode) => {
  const visited = new Set();
  const queue = [];

  queue.push(startNode);

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      bfsResult.push(node);
      visited.add(node);

      const neighbors = graph[node];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
};

dfs(graph, info[2]);
bfs(graph, info[2]);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
