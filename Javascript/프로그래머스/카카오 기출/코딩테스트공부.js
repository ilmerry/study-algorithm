function solution(alp, cop, problems) {
  let [goal_alp, goal_cop] = [alp, cop];
  for ([a, c] of problems) {
    if (a > goal_alp) goal_alp = a;
    if (c > goal_cop) goal_cop = c;
  }

  let dp = Array.from(Array(goal_alp + 1), () =>
    new Array(goal_cop + 1).fill(Infinity)
  );

  dp[alp][cop] = 0;
  for (let i = alp; i <= goal_alp; i++) {
    for (let j = cop; j <= goal_cop; j++) {
      if (i + 1 <= goal_alp)
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      if (j + 1 <= goal_cop)
        dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);

      for ([alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (i < alp_req || j < cop_req) continue;
        const nxAlp = i + alp_rwd < goal_alp ? i + alp_rwd : goal_alp;
        const nxCop = j + cop_rwd < goal_cop ? j + cop_rwd : goal_cop;
        dp[nxAlp][nxCop] = Math.min(dp[nxAlp][nxCop], dp[i][j] + cost);
      }
    }
  }

  return dp[goal_alp][goal_cop];
}
