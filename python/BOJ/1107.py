# 현재 채널: 100
n = list(map(int, input()))    # 이동하려는 채널
m = int(input())    # 고장난 버튼 개수
array = map(int, input().split())

result = len(n)

for i in n:
    for j in array:
        if i == j:
            result += 1

print(result)