function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  if (
    deliveries.reduce((acc, cur) => acc + cur, 0) === 0 ||
    pickups.reduce((acc, cur) => acc + cur, 0) === 0
  )
    return 0;

  let cur = 0;
  while (deliveries.length || pickups.length) {
    while (deliveries.length) {
      cur += deliveries.pop();
      if (cur > cap) {
        deliveries.push(cur - cap);
        break;
      }
    }
    cur = 0;
    while (pickups.length) {
      cur += pickups.pop();
      if (cur > cap) {
        pickups.push(cur - cap);
        break;
      }
    }
    cur = 0;

    answer += n;
    n = Math.max(deliveries.length, pickups.length);
  }

  return answer * 2;
}
