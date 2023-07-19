function solution(n) {
  let arr = [0, 1];
  let i;

  for (i = 2; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567); // (A + B) % C는 A % C + B % C와 같다
  }

  return arr[n];
}
