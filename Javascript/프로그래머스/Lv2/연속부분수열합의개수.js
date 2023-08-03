function solution(elements) {
  var answer = [];

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const str = [...elements, ...elements].splice(j, i);
      answer.push(str.reduce((acc, num) => acc + num, 0));
    }
  }

  return new Set(answer).size;
}
