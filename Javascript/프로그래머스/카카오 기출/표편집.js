function solution(n, k, cmd) {
  let arr = new Array(n).fill("O");
  let cur = k;
  const stack = [];

  cmd.forEach((line) => {
    //console.log(line)
    const [option, offset] = line.split(" ");

    switch (option) {
      case "D":
        var path = [...arr].slice(cur + 1, cur + Number(offset) + 1);
        cur += Number(offset) + path.filter((c) => c === "X").length;
        break;
      case "U":
        var path = [...arr].slice(cur - Number(offset), cur);
        cur -= Number(offset) + path.filter((c) => c === "X").length;
        break;
      case "C":
        arr[cur] = "X";
        stack.push(cur);

        if (cur === n - 1) {
          while (arr[cur] === "X") cur += 1;
          n -= 1;
        } else {
          while (arr[cur] === "X") cur += 1;
        }
        break;
      case "Z":
        arr[stack.pop()] = "O";
        n += 1;
        break;
    }

    //console.log(arr.join(''))
    //console.log(cur)
  });

  return arr.join("");
}
