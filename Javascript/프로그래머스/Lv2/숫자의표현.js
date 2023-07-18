function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let target = n;
    let submit = i;
    while (target > 0) {
      target -= submit;
      submit += 1;
    }
    if (target === 0) answer += 1;
  }

  return answer;
}
