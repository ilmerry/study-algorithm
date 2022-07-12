def solution(prices):
    answer = []
    for i in range(len(prices)):
        for j in range(i, len(prices)):
            if j == len(prices) - 1 or prices[i] > prices[j]:
                answer.append(j-i)
                break
                
    return answer