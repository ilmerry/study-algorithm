function solution(s) {
  var answer = s.split(" ").sort((a, b) => a - b);
  return [answer[0], answer[answer.length - 1]].join(" ");
}

// Max.min(), Max.max()는 문자열도 가능하다
