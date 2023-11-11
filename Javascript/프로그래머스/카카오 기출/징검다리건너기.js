function solution(stones, k) {
  if (stones.length === 1) return stones[0];

  // 2억개 이상의 데이터 -> binary search 사용할것
  const min = stones.reduce((min, cur) => (min > cur ? cur : min), 200000000);
  const max = stones.reduce((max, cur) => (max < cur ? cur : max), 1);

  return bs(stones, k, min, max);
}

const bs = (arr, k, min, max) => {
  if (min === max) return min;
  let mid = Math.round((min + max) / 2);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count >= k) break;
    arr[i] - (mid - 1) <= 0 ? count++ : (count = 0);
  }

  if (count >= k) return bs(arr, k, min, mid - 1);
  else return bs(arr, k, mid, max);
};
