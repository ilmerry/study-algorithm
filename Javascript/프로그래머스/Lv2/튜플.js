function solution(s) {
  return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, next) => {
      const newArr = [...acc];
      for (let i = 0; i < next.length; i++) {
        if (!acc.includes(next[i])) {
          newArr.push(next[i]);
          break;
        }
      }
      return newArr;
    }, []);
}
