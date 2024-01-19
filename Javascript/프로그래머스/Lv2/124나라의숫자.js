// 효율성 통과 못함
function solution(n) {
  let i = 2;
  let pre = "1";
  while (i <= n) {
    for (let j = pre.length - 1; j >= 0; j--) {
      if (pre[j] === "1") {
        pre = pre.substring(0, j) + "2" + pre.substring(j + 1, pre.length);
        break;
      } else if (pre[j] === "2") {
        pre = pre.substring(0, j) + "4" + pre.substring(j + 1, pre.length);
        break;
      } else if (pre[j] === "4") {
        pre = pre.substring(0, j) + "1" + pre.substring(j + 1, pre.length);
        if (j === 0) pre = "1" + pre;
      }
    }
    i++;
  }

  return pre;
}

// 3진법 개념 - 앞에서 하나 당겨쓴다
function solution(n) {
  var answer = "";

  while (n > 0) {
    if (n % 3 === 0) {
      answer = "4" + answer;
      n = Math.floor(n / 3) - 1;
    } else {
      answer = (n % 3) + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}
