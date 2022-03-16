import sys
n = int(input())

stack = []
for _ in range(n):
    input_data = sys.stdin.readline().split()
    if input_data[0] == "push":
        stack.append(input_data[1])
    elif input_data[0] == "pop":
        if len(stack) <= 0:
            print(-1)
        else: print(stack.pop())
    elif input_data[0] == 'size':
        print(len(stack))
    elif input_data[0] == 'empty':
        if len(stack) <= 0:
            print(1)
        else:
            print(0)
    else:
        if len(stack) <= 0:
            print(-1)
        else:
            num = stack.pop()
            stack.append(num)
            print(num)