function solution(want, number, discount) {
  var answer = 0;
  const mine = new Map();
  for (let i = 0; i < want.length; i++) {
    mine.set(want[i], number[i]);
  }
  const map = new Map();
  for (let i = 0; i < 10; i++) {
    map.set(discount[i], (map.get(discount[i]) || 0) + 1);
  }
  for (let i = 1; i + 10 - 1 <= discount.length; i++) {
    if (isSameMap(mine, map)) answer++;
    const left = map.get(discount[i - 1]);
    left > 1 ? map.set(discount[i - 1], left - 1) : map.delete(discount[i - 1]);
    map.set(discount[i + 10 - 1], (map.get(discount[i + 10 - 1]) || 0) + 1);
  }
  return answer;
}

function isSameMap(mapA, mapB) {
  if (mapA.size !== mapB.size) return false;
  for ([keyA, valA] of mapA) {
    if (valA !== mapB.get(keyA)) return false;
  }
  return true;
}
