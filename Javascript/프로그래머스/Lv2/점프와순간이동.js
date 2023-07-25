function solution1(n) {
  var ans = 0;

  while (n > 0) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n -= 1;
      ans++;
    }
  }

  return ans;
}

function solution2(n) {
  // 어떤 수를 계속 2로 나눈 나머지 = 어떤 수를 2진수로 변환했을 때 1의 개수
  return n.toString(2).match(/1/g).length;
}
