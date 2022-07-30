import heapq

def solution(operations):
    answer = []
    heap = []
    heapq.heapify(heap)
    
    for item in operations:
        operator = item[0]
        operand = int(item[2:])
        
        if operator == "I":
            # 삽입 연산일 경우 최소힙으로 바꾸고 삽입
            heapq.heappush(heap, (operand, operand))
        elif operator == "D":
            # 삭제 연산일 경우
            if len(heap) == 0:
                pass
            elif operand == 1:
                # 최대 힙으로 바꾸고 삭제
                tmp = []
                for pri, num in heap:
                    heapq.heappush(tmp, (-num, num))
                heap = tmp
                heapq.heappop(heap)
            elif operand == -1:
                # 최소 힙으로 바꾸고 삭제
                tmp = []
                for pri, num in heap:
                    heapq.heappush(tmp, (num, num))
                heap = tmp
                heapq.heappop(heap)
        print(heap)
    
    if len(heap) == 0:
        return [0, 0]
    # 최댓값 삽입
    answer.append(max(heap)[1])
    # 최솟값 삽입
    answer.append(min(heap)[1])
    
    return answer