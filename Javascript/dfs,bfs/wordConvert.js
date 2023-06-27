const isNeighbor = (word1, word2, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) if (word1[i] !== word2[i]) count += 1;
  return count === 1;
};

function solution(begin, target, words) {
  // 접근1: 한글자가 다르면 이웃
  // 인접 리스트 만들기
  if (!words.includes(target)) return 0; // words 안에 target이 없으면 변환 불가
  const graph = {};
  words.push(begin);
  const n = words.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isNeighbor(words[i], words[j], n)) {
        graph[words[i]] = (graph[words[i]] || []).concat(words[j]);
      }
    }
  }

  // 접근2: '최소' 몇단계를 거쳐야하는지 => bfs
  const visited = new Set();
  const queue = [];
  let count = 0;

  queue.push(begin);
  while (queue.length) {
    const word = queue.shift();
    if (!visited.has(word)) {
      if (word === target) return count;
      count += 1;
      visited.add(word);

      const neighbors = graph[word];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          queue.sort();
        }
      }
    }
  }

  return 0;
}
