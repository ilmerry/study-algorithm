import sys
input = sys.stdin.readline
n, c = map(int, input().split())

array = []
for _ in range(n):
    array.append(int(input()))
array.sort()

result = 0
start = 1
end = array[n-1] - array[0]

while start <= end:
    mid = (start + end) // 2
    count = 1
    j = 0
    for i in range(1, n):
        if array[i] - array[j] >= mid:
            count += 1
            j += 1
    if count >= c:
        result = max(result, mid)
        start = mid + 1
    else:
        end = mid - 1
    
print(result)