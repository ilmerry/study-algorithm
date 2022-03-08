n = int(input())
vectors = []
for _ in range(n):
    x, y = map(int, input().split())
    vectors.append((x, y))

vectors.sort(key=lambda v:v[1]) # 두번째 원소 기준 오름차순 정렬
vectors.sort(key=lambda v:v[0]) # 첫번째 원소 기준 오름차순 정렬

for v in vectors:
    print(v[0], v[1])