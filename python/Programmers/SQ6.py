def solution(s):
    stack = []
    for c in s:
        if c == '(':
            stack.append(c)
        elif c == ')' and len(stack) != 0:
            stack.pop()
        else:
            # 스택이 비어있는 상태에서 ')'가 들어왔을 때
            return False
            
    if len(stack) == 0:
        return True
    return False