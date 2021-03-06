def solution(progresses, speeds):
    answer = []
    
    # 남은 작업 완료까지 걸리는 일 수
    arr = []
    for i in range(len(progresses)):
        j = 100 - progresses[i]
        arr.append(j // speeds[i])
        if j % speeds[i] != 0:
            arr[i] += 1
            
    complete = 1
    for i in range(len(arr)-1):
        if arr[i+1] <= arr[i]:
            complete += 1
            arr[i+1] = arr[i]
        else:
            answer.append(complete)
            complete = 1
    answer.append(complete)
    
    return answer