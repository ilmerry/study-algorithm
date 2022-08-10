def solution(brown, yellow):
    width, height = 0, 0
    
    measures = []
    for i in range(1, int(yellow**(1/2)) + 1):
        if yellow % i == 0:
            measures.append((i, yellow // i))
    
    for i, j in measures:
        if (i + 2) * (j + 2) == brown + yellow:
            return [j + 2, i + 2]