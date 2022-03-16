n = int(input())
vectors = []
for _ in range(n):
    x, y = map(int, input().split())
    vectors.append((x, y))

vectors.sort(key=lambda v:v[0])
vectors.sort(key=lambda v:v[1])

for v in vectors:
    print(v[0], v[1])