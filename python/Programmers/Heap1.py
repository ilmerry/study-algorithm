import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while True:
        if len(scoville) < 2:
            break
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        heapq.heappush(scoville, first + (second * 2))
        answer += 1
        # 가장 작은 애 뽑았을 때 걔가 K 이상이면 됨
        # [1, 1], 3일 경우 1이 아닌 -1이 나오므로 끝에서 계산
        if scoville[0] >= K:
            return answer
    
    return -1