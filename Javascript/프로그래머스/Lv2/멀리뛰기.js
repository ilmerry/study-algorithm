/* 동적 계획법(Dynamic Programming)
 * 복잡한 문제를 여러 개의 간단한 문제로 나누어 풀고, 그것을 결합하여 최종적인 문제를 해결하는 것
 */

// k =1234567
// (a + b) % k == a % k + b % k 합성법칙
// fib(n) % k == (fib(n - 1) + fib(n - 2)) % k
function solution(n) {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] % 1234567) + (dp[i - 2] % 1234567);
  }

  return dp[n] % 1234567;
}
