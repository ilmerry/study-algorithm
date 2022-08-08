def setting(data):
    result = ''
    i = 0
    while i < len(data):
        result = str(data)[i]
        i += 1
        
    return result

def solution(numbers):
    answer = ''
    numbers.sort()
    makeStr = [str(num) for num in numbers]
    biggestNum = sorted(makeStr, key=setting, reverse = True)
    
    if max(biggestNum) > '0':
        answer = ''.join(biggestNum)
    else:
        answer = '0'
    
    return answer