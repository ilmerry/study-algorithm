n = int(input())

members = []
for i in range(n):
    age, name = map(str, input().split())
    members.append((i, int(age), name))

members.sort(key=lambda m:m[0])
members.sort(key=lambda m:m[1])

for m in members:
    print(m[1], m[2])