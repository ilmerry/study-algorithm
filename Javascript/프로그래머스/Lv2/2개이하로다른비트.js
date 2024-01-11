function solution(numbers) {
  let result = [];

  for (number of numbers) {
    if (number % 2 === 0) result.push(number + 1);
    else {
      let bin = ["0", ...number.toString(2).split("")];

      for (let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] === "0") {
          bin[i] = "1";
          bin[i + 1] = "0";
          break;
        }
      }
      result.push(parseInt(bin.join(""), 2));
    }
  }

  return result;
}
