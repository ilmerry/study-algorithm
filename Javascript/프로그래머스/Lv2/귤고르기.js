function solution(k, tangerine) {
  var answer = 0;
  const map = new Map();
  tangerine.forEach((tan) => {
    if (map.has(tan)) map.set(tan, map.get(tan) + 1);
    else map.set(tan, 1);
  });
  const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
  for ([key, val] of sortedMap) {
    if (k > val) {
      k -= val;
      answer++;
    } else {
      answer++;
      break;
    }
  }

  return answer;
}
