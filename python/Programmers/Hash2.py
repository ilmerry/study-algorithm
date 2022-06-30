def solution(phone_book):
    # 문자열길이 순으로 정렬
    phone_book.sort(key=len)
    # 값 기준으로 정렬
    phone_book.sort()
    
    for i in range(len(phone_book)):
        if i == len(phone_book) - 1:
            print(i)
            return True
        elif phone_book[i] == phone_book[i+1][:len(phone_book[i])]:
            return False
            
    return True