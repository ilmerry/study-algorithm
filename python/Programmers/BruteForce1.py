# 나의 풀이
def solution(answers):
    answer = []
    
    students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    score = [0, 0, 0]
    
    for student, pick in enumerate(students):
        for i in range(len(answers)):
            if pick[i % len(pick)] == answers[i]:
                score[student] += 1
                
    for i in range(3):
        if score[i] == max(score):
            answer.append(i+1)
    
    return answer