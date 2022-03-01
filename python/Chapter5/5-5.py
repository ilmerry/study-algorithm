# Factorial
def factorial_iterative(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

def factorial_recursive(n):
    if n <= 1:
        return 1
    else:
        return n * factorial_iterative(n-1)

print(factorial_recursive(5))