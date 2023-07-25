function gcd(a, b) {
  // 유클리드 호제법
  return (num1, num2) => (num2 > 0 ? gcd(num2, num1 % num2) : num1);
}

function solution(arr) {
  // 최소공배수는 두 수의 곱을 두수의 최대공약수로 나눈 것과 같다.
  return arr.reduce((acc, num) => (acc * num) / gcd(acc, num), 1);
}
