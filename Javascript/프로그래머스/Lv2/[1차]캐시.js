function solution(cacheSize, cities) {
  var answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  let cache = new Array(cacheSize).fill("");
  cities.forEach((c) => {
    const city = c.toLowerCase();
    if (cache.includes(city)) {
      cache = [...cache.filter((v) => v !== city), city];
      answer += 1;
    } else {
      cache.shift();
      cache.push(city);
      answer += 5;
    }
  });

  return answer;
}
