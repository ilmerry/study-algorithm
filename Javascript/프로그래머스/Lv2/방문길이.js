function solution(dirs) {
  var answer = 0;
  const visited = new Set();

  let start = [0, 0];
  for (let i = 0; i < dirs.length; i++) {
    const [x, y] = start;
    switch (dirs[i]) {
      case "U":
        if (y < 5) {
          visited.add([x, y, dirs[i]].join(""));
          visited.add([x, y + 1, "D"].join(""));
          start = [x, y + 1];
        }
        break;
      case "D":
        if (y > -5) {
          visited.add([x, y, dirs[i]].join(""));
          visited.add([x, y - 1, "U"].join(""));
          start = [x, y - 1];
        }
        break;
      case "R":
        if (x < 5) {
          visited.add([x, y, dirs[i]].join(""));
          visited.add([x + 1, y, "L"].join(""));
          start = [x + 1, y];
        }
        break;
      case "L":
        if (x > -5) {
          visited.add([x, y, dirs[i]].join(""));
          visited.add([x - 1, y, "R"].join(""));
          start = [x - 1, y];
        }
        break;
    }
  }

  return visited.size / 2;
}
