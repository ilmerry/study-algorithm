import sys
input = sys.stdin.readline
k, n = map(int, input().split())

array = []
for _ in range(k):
    array.append(int(input()))

start = 1
end = max(array)

result = 0
while start <= end:
    count = 0
    mid = (start + end) // 2
    for x in array:
        count += x // mid
    if count >= n:
        start = mid + 1
        if result < mid:
            result = mid
    elif count < n:
        end = mid - 1

print(result)