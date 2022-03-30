import sys
input = sys.stdin.readline
n, m = map(int, input().split())
array = list(map(int, input().split()))

result = 0
start = 1
end = max(array)
while start <= end:
    total = 0
    mid = (start + end) // 2
    for x in array:
        if x > mid:
            total += x - mid
    if total >= m:
        start = mid + 1
        if mid > result:
            result = mid
    elif total < m:
        end = mid - 1

print(result)