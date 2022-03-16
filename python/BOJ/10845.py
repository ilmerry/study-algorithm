import sys
n = int(input())

queue = []
for _ in range(n):
    input_data = sys.stdin.readline().split()
    if input_data[0] == "push":
        queue.append(input_data[1])
    elif input_data[0] == "pop":
        if len(queue) <= 0:
            print(-1)
        else: print(queue.pop(0))
    elif input_data[0] == 'size':
        print(len(queue))
    elif input_data[0] == 'empty':
        if len(queue) <= 0:
            print(1)
        else:
            print(0)
    elif input_data[0] == "front":
        if len(queue) <= 0:
            print(-1)
        else:
            print(queue[0])
    else:
        if len(queue) <= 0:
            print(-1)
        else:
            print(queue[len(queue) - 1])
