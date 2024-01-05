function solution(land) {
  let max = 0;
  // 1 2 3 5
  // 10 11 12 11
  // 16 15 14 13
  let dp = Array.from(Array(land.length), () => new Array(4).fill(0));
  dp[0] = land[0];

  for (let i = 1; i < land.length; i++) {
    // 본인 = land[i][j]
    // 이전 값 중 최대 = land[i-1][k];
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k && dp[i - 1][k] + land[i][j] > dp[i][j]) {
          dp[i][j] = dp[i - 1][k] + land[i][j];
        }
      }
    }
  }

  return Math.max(...dp[land.length - 1]);
}

// dp로 풀었지만 열의 개수가 정해져있는 문제는 웬만하면 하드코딩 가능
