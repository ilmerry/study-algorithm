def solution(clothes):
    answer = 0
    
    # 옷 종류를 key, 개수를 value로 하는 딕셔너리
    dic = {}
    for item in clothes:
        if item[1] in dic:
            dic[item[1]] += 1
        else:
            dic[item[1]] = 1
    
    for i in dic:
        if answer == 0:
            answer = dic[i] + 1
        else:
            answer *= (dic[i] + 1)
        
    answer -= 1
    return answer