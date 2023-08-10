function solution(n, t, m, p) {
  var answer = "";
  let str = "";
  for (let i = 0; i < m * t; i++) {
    str += i.toString(n).toUpperCase();
    if (i % m === p - 1) {
      answer += str[i];
    }
  }
  return answer;
}
