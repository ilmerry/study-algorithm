position = input()
col = ord(position[0]) - ord('a') + 1
row = int(position[1])

moves = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

count = 0
for move in moves:
    nr = row + move[0]
    nc = col + move[1]
    if nr >= 1 and nr <= 8 and nc >= 1 and nc <= 8:
        count += 1

print(count)