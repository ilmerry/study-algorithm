function solution(numbers, hand) {
  var answer = "";
  let left = [0, 3];
  let right = [2, 3];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numbers[i] = 10;
  }

  for (number of numbers) {
    const y = Math.ceil(number / 3) - 1;
    if ([1, 4, 7].includes(number)) {
      answer += "L";
      left = [0, y];
    } else if ([3, 6, 9].includes(number)) {
      answer += "R";
      right = [2, y];
    } else {
      const leftDist = Math.abs(left[0] - 1) + Math.abs(left[1] - y);
      const rightDist = Math.abs(right[0] - 1) + Math.abs(right[1] - y);
      if (leftDist > rightDist) {
        answer += "R";
        right = [1, y];
      } else if (leftDist < rightDist) {
        answer += "L";
        left = [1, y];
      } else {
        if (hand === "left") {
          answer += "L";
          left = [1, y];
        } else {
          answer += "R";
          right = [1, y];
        }
      }
    }
  }

  return answer;
}
