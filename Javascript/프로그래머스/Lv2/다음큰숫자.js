function solution(n) {
  const target = n.toString(2).match(/1/g).length;

  while (n++) {
    if (n.toString(2).match(/1/g).length === target) break;
  }

  return n;
}
