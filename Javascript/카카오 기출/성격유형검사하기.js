function solution(survey, choices) {
  var answer = ["R", "C", "J", "A"];
  const score = [3, 2, 1, 0, 1, 2, 3]; // 012 456
  var object = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const [char1, char2] = survey[i];
    const choice = choices[i] - 1;

    if (choice <= 2) {
      object[char1] += score[choice];
    } else if (choice >= 4) {
      object[char2] += score[choice];
    }
  }

  ["RT", "CF", "JM", "AN"].map(([char1, char2], index) => {
    if (object[char1] < object[char2]) answer[index] = char2;
  });

  return answer.join("");
}
