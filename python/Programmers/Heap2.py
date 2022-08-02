import heapq

def solution(jobs):
    answer = 0
    jobs.sort()
    heap = []
        
    time = 0
    total = 0
    for req, pro in jobs:
        # 소요시간, 요청시간
        while req >= time:
            if len(heap) == 0:
                time += pro
                total += (time - req)
                break
            pro, req = heapq.heappop(heap)
            time += pro
            total += (time - req)
        else:
            # 이미 요청시간을 지났을 경우 소요시간 기준으로 정렬
            heapq.heappush(heap, [pro, req])
    
    while heap:
        pro, req = heapq.heappop(heap)
        time += pro
        total += (time - req)
            
    answer = total / len(jobs)
    
    return answer