minValue = 999

def dfs(graph, v, visited):
    global minValue
    visited[v] = True
    # visited에서 True인 노드 개수 - False인 노드 개수
    node_true = len(list(filter(lambda x: x == True, visited)))
    node_false = len(list(filter(lambda x: x == False, visited))) - 1
    minValue = min(abs(node_true - node_false), minValue)
    
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)
            break

def solution(n, wires):
    # 맵 생성
    graph = [[] for _ in range(n+1)]
    for i, j in wires:
        graph[i].append(j)
        graph[j].append(i)
        
    # dfs
    visited = [False for _ in range(n+1)]
    dfs(graph, 1, visited)
    
    return minValue