function solution(s) {
  var answer = [];
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      flag = true;
      answer.push(" ");
    } else if ((s[i].match(/[a-z]/i) && i === 0) || flag) {
      // 첫글자인데 소문자인경우
      answer.push(s[i].toUpperCase());
      flag = false;
    } else if (s[i].match(/[A-Z]/i) && !flag) {
      // 첫글자가 아닌데 대문자인 경우
      answer.push(s[i].toLowerCase());
    } else {
      answer.push(s[i]);
    }
  }

  return answer.join("");
}

// str[index]보다 str.charAt(index)를 쓰는 것이 좋다
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
