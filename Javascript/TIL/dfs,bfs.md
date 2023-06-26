# DFS & BFS

대표적인 그래프 탐색 알고리즘

- 출제 빈도가 상당히 높다
- 경로 찾는 문제

<br/>

## DFS(깊이 우선 탐색)

> 부모노드에서 다음 자식 브랜치로 넘어가기 전에, 브랜치를 모두 탐색하는 방법

- 스택이나 재귀함수를 통해 구현
- 경로를 탐색할 때 한 방향으로 갈 수 있을 때까지 계속 탐색하다가 더 이상 갈 수 없게 되면 다른 방향으로 다시 탐색
- **모든 경로를 방문**해야할 때, 시작부터 특정 목적지까지의 경로를 탐색해야할 때 유용
- 시간 복잡도: 인접리스트일 때 O(n)

### 코드

```javascript
// 스택 버전
const dfs = (graph, startNode) => {
  const visited = new Set(); // 방문한 노드를 저장하기 위한 Set
  const stack = []; // 탐색해야할 노드

  stack.push(startNode);

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      // 해당 노드를 방문한 이력이 없다면
      console.log(node); // 노드 출력
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

// 재귀함수 버전
const recursiveDfs = (graph, startNode, visited = new Set()) => {
  visited.add(startNode);
  console.log(startNode);

  const neighbors = graph[startNode];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (!visited.has(neighbor)) {
      recursiveDfs(graph, neighbor, visited);
    }
  }
};
```

<br/>

## BFS(너비 우선 탐색)

> 부모노드 또는 임의노드에서 인접한 형제노드부터 먼저 탐색하는 방법

- 큐를 사용해 구현
- 최소비용을 탐색할 때, 간선의 가중치가 1일 때, 정점과 간선의 개수가 적을 때
- 시간 복잡도: 인접리스트일 때 O(n)

### 코드

```javascript
// 스택 버전
const bfs = (graph, startNode) => {
  const visited = new Set();
  const queue = [];

  queue.push(startNode);

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
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
```

<br/>

## 실전 문제풀이

- 게임맵 최단거리 문제와 같은 동서남북으로만 이동할 수 있는 경우 dx, dy를 선언해 푼다
- 이때 maps[y][x]의 형태로 풀어야함
- queue에 push하는 시점에 visited 처리를 해주어야 한다. 안그럼 중복 일어남

## 참고자료

https://developer-mac.tistory.com/64
