n, m, k = map(int, input().split())
data = list(map(int, input().split()))

# 가장 큰 수와 두번째로 큰 수 저장
data.sort()
first = data[n-1]
second = data[n-2]

result = 0
m_copy = m
while True:
    for i in range(k):
        if m == 0:
            break
        result += first
        m -= 1
    if m == 0:
        break
    result += second
    m -= 1

print(result)

# 더 효율적으로 해결하기
count = int(m_copy / (k + 1)) * k
count += m_copy % (k + 1)

result = 0
result += (count) * first
result += (m_copy - count) * second

print(result)