n, m, k = map(int, input().split())

result = 0
while n >= 2 and m >= 1 and (n-2) + (m-1) >= k:
    n -= 2
    m -= 1
    result += 1

print(result)