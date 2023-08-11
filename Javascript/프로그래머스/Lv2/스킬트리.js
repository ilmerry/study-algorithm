function solution(skill, skill_trees) {
  return skill_trees.reduce((count, tree) => {
    const str = tree
      .split("")
      .filter((k) => skill.includes(k))
      .join("");

    // 정규식 또는 startsWith를 사용하면 된다
    return skill.startsWith(str) ? count + 1 : count;
  }, 0);
}
