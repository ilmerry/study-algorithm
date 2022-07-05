def solution(genres, plays):
    answer = []
    # 장르를 key, {고유번호 : 재생횟수}를 value로 하는 딕셔너리
    dic = {}
    for i in range(len(plays)):
        if genres[i] in dic:
            dic[genres[i]][i] = plays[i]
        else:
            dic[genres[i]] = { i : plays[i] }
    # 장르 총 재생횟수를 기준으로 정렬
    dic = sorted(dic.items(), key=lambda x: sum(x[1].values()), reverse=True)
    
    # 노래 별 재생횟수를 기준으로 정렬한 후 answer에 두 개 저장
    for value in dic:
        sub_dic = sorted(value[1].items(), key=lambda item: item[1],reverse=True)
        answer.append(sub_dic[0][0])
        if len(sub_dic) > 1:
            answer.append(sub_dic[1][0])
    return answer