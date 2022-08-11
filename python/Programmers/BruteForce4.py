import itertools

def solution(k, dungeons):
    answer = 0
    orders = list(itertools.permutations(dungeons))
    
    for order in orders:
        count = 0
        fatigue = k
        for minimum, consume in order:
            if fatigue >= minimum:
                fatigue -= consume
                count+= 1
        answer = max(answer, count)
        
    return answer