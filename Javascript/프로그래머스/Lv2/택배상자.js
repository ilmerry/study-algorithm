function solution(order) {
  var answer = 0;
  let queue = 1;
  const stack = [];

  while (queue <= order.length) {
    const i = order[answer];
    if (i === queue) {
      queue++;
      answer++;
      continue;
    }
    if (i === stack.at(-1)) {
      stack.pop();
      answer++;
      continue;
    }
    stack.push(queue);
    queue++;
  }

  while (stack.length > 0) {
    if (order[answer] === stack.at(-1)) {
      stack.pop();
      answer++;
    } else break;
  }

  return answer;
}
