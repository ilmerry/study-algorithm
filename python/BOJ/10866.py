import sys
n = int(input())

deque = []
for _ in range(n):
    input_data = sys.stdin.readline().split()
    if input_data[0] == "push_front":
        deque.insert(0, input_data[1])
    elif input_data[0] == "push_back":
        deque.append(input_data[1])
    elif input_data[0] == "pop_front":
        if len(deque) <= 0:
            print(-1)
        else:
            print(deque.pop(0))
    elif input_data[0] == "pop_back":
        if len(deque) <= 0:
            print(-1)
        else:
            print(deque.pop())
    elif input_data[0] == 'size':
        print(len(deque))
    elif input_data[0] == 'empty':
        if len(deque) <= 0:
            print(1)
        else:
            print(0)
    elif input_data[0] == "front":
        if len(deque) <= 0:
            print(-1)
        else:
            print(deque[0])
    elif input_data[0] == "back":
        if len(deque) <= 0:
            print(-1)
        else:
            print(deque[len(deque) - 1])