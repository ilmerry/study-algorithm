e, s, m = map(int, input().split())

result = 1
a = b = c = 1
while True:
    if(a == e and b == s and c == m): break
    a += 1
    b += 1
    c += 1
    result += 1
    if(a > 15): a = 1
    if(b > 28): b = 1
    if(c > 19): c = 1

print(result)