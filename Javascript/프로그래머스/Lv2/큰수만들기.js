function solution(number, k) {
  let stack = [];
  for (let n of number) {
    while (stack.at(-1) < n && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }

  if (k > 0) stack = stack.slice(0, stack.length - k);

  return stack.join("");
}
