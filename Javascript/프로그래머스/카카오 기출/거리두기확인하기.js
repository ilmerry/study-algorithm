function solution(places) {
  var answer = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const check = (graph) => {
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        const me = graph[x][y];

        if (graph[x][y] !== "X") {
          const me = graph[x][y];
          let count = 0;

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
              const neighbor = graph[nx][ny];
              if (me === "P" && neighbor === "P") return 0;
              else if (me === "O") {
                if (neighbor === "P") count += 1;
                if (count >= 2) return 0;
              }
              graph[nx][ny] = "X";
            }
          }
        }
      }
    }
    return 1;
  };

  places.forEach((place) => {
    answer.push(check(place));
  });

  return answer;
}
