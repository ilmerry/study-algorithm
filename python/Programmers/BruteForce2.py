import itertools

def is_prime(n):
    if n <= 1:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

def solution(numbers):
    # string to list
    numberlist = list(numbers.strip())
    primes = []
    for i in range(len(numberlist)):
        primes += list(map(''.join, itertools.permutations(numberlist, i+1)))
    # string to int
    primes = list(map(int, primes))
    # 중복 제거
    primes = list(set(primes))
    # 소수 판별
    primes = list(filter(is_prime, primes))
    print(primes)
                
    return len(primes)