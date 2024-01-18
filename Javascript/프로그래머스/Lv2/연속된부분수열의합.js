function solution(sequence, k) {
  var answer = [];
  let i = 0,
    j = 0;
  let sum = sequence[0];

  while (i <= j && j <= sequence.length - 1) {
    if (sum === k) {
      answer.push([i, j]);
      sum -= sequence[i];
      i++;
    } else if (sum < k) {
      j++;
      sum += sequence[j];
    } else {
      sum -= sequence[i];
      i++;
    }
  }

  return answer.reduce((acc, cur) => {
    if (acc[1] - acc[0] > cur[1] - cur[0]) return cur;
    else if (acc[1] - acc[0] === cur[1] - cur[0] && acc[0] > cur[0]) return cur;
    else return acc;
  }, answer[0]);
}
