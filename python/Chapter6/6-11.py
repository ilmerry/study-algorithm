n = int(input())

array = []
for i in range(n):
    input_data = input().split()
    array.append((input_data[0], int(input_data[1])))

list = sorted(array, key=lambda student: student[1])

for name in list:
    print(name[0], end=' ')