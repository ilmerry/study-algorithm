function solution(park, routes) {
  const [h, w] = [park.length, park[0].length];
  let cur = [0, 0];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (park[i][j] === "S") {
        cur[0] = i;
        cur[1] = j;
      }
    }
  }

  for (let route of routes) {
    const [op, n] = route.split(" ");
    let [nx, ny] = [cur[1], cur[0]];
    const path = [];
    if (op === "N") {
      while (ny > cur[0] - Number(n)) {
        path.push(park[ny][nx]);
        ny--;
        if (ny < 0) {
          path.push("X");
          break;
        }
      }
    } else if (op === "S") {
      while (ny < cur[0] + Number(n)) {
        path.push(park[ny][nx]);
        ny++;
        if (ny >= h) {
          path.push("X");
          break;
        }
      }
    } else if (op === "W") {
      while (nx > cur[1] - Number(n)) {
        path.push(park[ny][nx]);
        nx--;
        if (nx < 0) {
          path.push("X");
          break;
        }
      }
    } else if (op === "E") {
      while (nx < cur[1] + Number(n)) {
        path.push(park[ny][nx]);
        nx++;
        if (nx >= w) {
          path.push("X");
          break;
        }
      }
    }

    if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
      path.push(park[ny][nx]);
      if (!path.includes("X")) {
        cur[0] = ny;
        cur[1] = nx;
      }
    }
  }

  return cur;
}

// if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X')
// undefined[ny] 때문에 에러가 나는 것이므로 !park[nx] 로 걸러내면 된다.
