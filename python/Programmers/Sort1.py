from collections import deque

def solution(array, commands):
    answer = []
    commands = deque(commands)
    
    while commands:
        i, j, k = commands.popleft()
        subarr = array[i-1:j]
        subarr.sort()
        answer.append(subarr[k-1])
        
    return answer