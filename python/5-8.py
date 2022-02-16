def dfs(graph, v, visited):
    visited[v] = True   # 현재 노드 방문 처리
    print(v, end= ' ')
    for i in graph[v]:
        # 현재 노드와 연결된 다른 노드 방문
        if not visited[i]:
            dfs(graph, i, visited)

graph = [
    [],
    # 1번 노드는 2, 3, 8번과 연결
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

visited = [False] * 9
dfs(graph, 1, visited)