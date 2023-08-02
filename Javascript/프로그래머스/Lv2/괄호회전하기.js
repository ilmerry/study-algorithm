function isRightStr(str) {
  const pair = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  if (Object.values(pair).includes(str[0])) return false;

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(pair).includes(str[i])) {
      stack.push(str[i]);
    } else if (pair[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    }
  }

  return !(stack.length > 0);
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    const str = [...s.slice(i, s.length), ...s.slice(0, i)].join(""); // slice, split 뭘쓸지 고민될 때는 spread + slice 조합으로 쓰기

    if (isRightStr(str)) answer++;
  }

  return answer;
}
