import heapq
from collections import deque

def solution(jobs):
    jobs.sort()
    tasks = deque(jobs)
    heap = []
        
    time = 0
    total = 0
    task = tasks.popleft()
    heapq.heappush(heap, [task[1], task[0]])
    for req, pro in tasks:
        print(req, pro)
        while req > time:
            if len(heap) > 0:
                p, r = heapq.heappop(heap)
                time = max(time + p, r + p)
                total += (time - r)
            else:
                if req > time:
                    heapq.heappush(heap, [pro, req])
                    break
                time = max(time + pro, req + pro)
                total += (time - req)
        else:
            heapq.heappush(heap, [pro, req])
    
    while heap:
        pro, req = heapq.heappop(heap)
        time = max(time + pro, req + pro)
        total += (time - req)
        print(total)
    
    return total // len(jobs)