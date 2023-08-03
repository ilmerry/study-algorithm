function solution(n, left, right) {
  var answer = [];

  for (let i = left; i < right + 1; i++) {
    answer.push(Math.max((i % n) + 1, (i - (i % n)) / n + 1));
  }

  return answer;
}
