function solution(queue1, queue2) {
  var answer = -1;
  // 중요한 것은 두 큐의 합이 같아야한다는 것. up & down
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);

  const arr = [...queue1, ...queue2];
  const length = arr.length;
  const max = length * 2; // 원래대로 되돌아올 때가 최대
  let ptr1 = 0,
    ptr2 = length / 2;

  let count = 0;
  while (count < max) {
    if (sum1 === sum2) return count;

    if (sum1 > sum2) {
      const element = arr[ptr1];
      ptr1 = (ptr1 + 1) % length;

      sum1 -= element;
      sum2 += element;
    } else {
      const element = arr[ptr2];
      ptr2 = (ptr2 + 1) % length;

      sum2 -= element;
      sum1 += element;
    }

    count += 1;
  }

  return answer;
}
