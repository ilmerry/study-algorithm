n, k = map(int, input().split())

array = []
for i in range(n):
    array.append(int(input()))

array.sort(reverse=True)
result = 0
for won in array:
    if k // won > 0:
        result += (k // won)
        k %= won

print(result)