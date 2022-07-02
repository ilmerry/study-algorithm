def solution(clothes):
    answer = 0
    answer += len(clothes)
    # 옷 종류를 key, 개수를 value로 하는 딕셔너리
    dic = {}
    for item in clothes:
        if item[1] in dic:
            dic[item[1]] += 1
        else:
            dic[item[1]] = 1
    
    return answer