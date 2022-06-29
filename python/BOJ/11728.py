import sys
input = sys.stdin.readline
n, m = map(int, input().split())

arrA = list(map(int, input().split()))
arrB = list(map(int, input().split()))

result = arrA + arrB
print(sorted(result))

# 분할정복으로 다시 풀어볼 것