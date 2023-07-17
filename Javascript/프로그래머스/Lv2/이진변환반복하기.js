const trimZero = (str) => {
  return [[...str].filter((v) => v === "0").length, str.split("0").join("")];
};

const strToBinary = (str) => {
  let len = str.length;
  const arr = [];

  while (len > 0) {
    arr.push(len % 2);
    len = Math.floor(len / 2);
  }

  return arr.reverse().join("");
};

function solution(s) {
  var answer = [0, 0];

  while (s !== "1") {
    [zeroCount, newStr] = trimZero(s);
    s = strToBinary(newStr);
    answer[1] += zeroCount;
    answer[0] += 1;
  }

  return answer;
}

// 다른 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    // js에서 length는 속성이므로, 굳이 밖으로 뺄 필요 없다
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length; // filter 대신 regex를 적극적으로 사용하자.
    s = s.replace(/0/g, "").length.toString(2); // toString안에 몇진수로 변환할 것인지를 전달할 수 있다.
  }
  return answer;
}
