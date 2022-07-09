from collections import deque

def solution(priorities, location):
    answer = 0
    
    deq = deque()
    for i in range(len(priorities)):
        deq.append((i, priorities[i]))
    
    # 제일 높은 우선순위
    first = 0
    first = max(priorities)
    while deq:
        index, pri = deq.popleft()
        if pri == first and index == location:
            answer += 1
            break
        elif pri == first:
            priorities = priorities[1:]
            first = max(priorities)
            answer += 1
        else:
            priorities = priorities[1:]
            priorities.append(pri)
            deq.append((index, pri))
    
    return answer