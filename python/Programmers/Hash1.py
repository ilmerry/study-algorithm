def solution(participant, completion):
    pd = {}
    # 참가자 이름을 key로, 동명이인의 수를 value로 하는 딕셔너리
    for p in participant:
        if p in pd:
            pd[p] += 1
        else:
            pd[p] = 1

    for p in completion:
        if pd[p] == 1:
            # 사람 수 1이면 그냥 지움
            del pd[p]
        else:
            # 동명이인 1 감소
            pd[p] -= 1
            
    return list(pd.keys())[0]