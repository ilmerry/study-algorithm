function solution(tickets) {
  var answer = [];
  // 모든 공항 방문 -> dfs
  // 인접리스트 생성
  const graph = tickets.reduce((graph, [node1, node2]) => {
    graph[node1] = (graph[node1] || []).concat(node2);
    return graph;
  }, {});

  const stack = [];
  const rest = [];
  const visited = new Array(tickets.length).fill(false); // 방문 여부 체크 배열

  stack.push("ICN");
  while (stack.length) {
    const ticket = stack.pop();
    if (graph[ticket]) {
      answer.push(ticket);
      if (answer.length === tickets.length + 1) break;

      const neighbors = graph[ticket];
      if (neighbors) {
        neighbors.sort();
        for (let i = neighbors.length - 1; i >= 0; i--) {
          const neighbor = neighbors[i];
          const index = graph[ticket].indexOf(neighbor);
          graph[ticket] = [
            ...graph[ticket].slice(0, index),
            ...graph[ticket].slice(index + 1),
          ];
          visited[i] = true;
          stack.push(neighbor);
        }
      }
    } else {
      rest.push(ticket);
    }
  }

  return answer.concat(rest);
}
