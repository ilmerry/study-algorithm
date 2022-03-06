import sys
import heapq
INF = int(1e9)
input = sys.stdin.readline
n, m, c = map(int, input().split())
graph = [[] for _ in range(n + 1)]
distance = [INF] * (n + 1)
visited = [False] * (n + 1)

for _ in range(m):
    x, y, z = map(int, input().split())
    graph[x].append((y, z))

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                visited[i[0]] = True
                heapq.heappush(q, (cost, i[0]))

dijkstra(c)

count = 0
max_dist = 0
for d in distance:
    if d != INF:
        count += 1
        max_dist = max(max_dist, d)

print(count - 1, max_dist)