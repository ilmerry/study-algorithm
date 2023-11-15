function solution(gems) {
  const count = new Set(gems).size;
  if (count === 1) return [1, 1];
  let [l, r] = [0, gems.length - 1];

  const map = new Map();
  map.set(gems[0], 1);
  let [i, j] = [0, 0];
  while (j < gems.length) {
    if (map.size === count) {
      if (r - l > j - i) {
        l = i;
        r = j;
      }
      map.set(gems[i], map.get(gems[i]) - 1);
      if (map.get(gems[i]) === 0) map.delete(gems[i]);

      i++;
    } else {
      j++;
      map.set(gems[j], map.get(gems[j]) ? map.get(gems[j]) + 1 : 1);
    }
  }

  return [l + 1, r + 1];
}
