function solution(players, callings) {
  var answer = [...players];
  const map = new Map();
  players.forEach((player, idx) => {
    map.set(player, idx);
  });

  for (calling of callings) {
    const i = map.get(calling);
    const tmp = answer[i];
    answer[i] = answer[i - 1];
    answer[i - 1] = tmp;
    map.set(calling, i - 1);
    map.set(answer[i], i);
  }

  return answer;
}
