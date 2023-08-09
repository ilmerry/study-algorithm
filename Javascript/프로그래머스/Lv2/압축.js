function solution(msg) {
  var answer = [];
  const dictionary = [0, ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let stack = [];

  stack.push(msg[0]);
  for (let i = 0; i < msg.length; i++) {
    const w = stack.join("");
    const c = msg[i + 1];

    if (dictionary.includes(w + c)) {
      stack.push(c);
    } else {
      dictionary.push(w + c);
      answer.push(dictionary.indexOf(w));
      stack = [c];
    }
  }

  return answer;
}
