import sys
input = sys.stdin.readline

n, m = map(int, input().split())

array = []
for i in range(n):
    array.append(list(map(int, input())))
print(array)

maxval = 0
sum1 = 0
for row in range(n):
    for col in range(n-1, row, -1):
        tmp1 = 0
        for i in range(row):
            tmp1 += sum(array[i])
        tmp2 = 0
        

for i in range(n):
    for j in range(m):
        pass
