function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  const done = [],
    doing = [];
  const end = truck_weights.length;
  while (done.length < end) {
    const sum = [...doing, [truck_weights[0], 0]].reduce((a, b) => a + b[0], 0);
    if (sum <= weight && doing.length <= bridge_length) {
      const t = truck_weights.shift();
      doing.push([t, answer + bridge_length]);
      answer++;
    } else {
      const [t, time] = doing.shift();
      if (answer < time) answer = time;
      done.push(t);
    }
  }

  return answer + 1;
}
