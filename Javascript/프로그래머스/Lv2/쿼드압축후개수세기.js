function solution(arr) {
  var answer = [];
  if (arr.flat().every((v) => v === 0)) return [1, 0];
  if (arr.flat().every((v) => v === 1)) return [0, 1];

  const s1 = arr
      .slice(0, arr.length / 2)
      .reduce((acc, cur) => [...acc, cur.slice(0, arr[0].length / 2)], []),
    s2 = arr
      .slice(0, arr.length / 2)
      .reduce(
        (acc, cur) => [...acc, cur.slice(arr[0].length / 2, arr[0].length)],
        []
      ),
    s3 = arr
      .slice(arr.length / 2, arr.length)
      .reduce((acc, cur) => [...acc, cur.slice(0, arr[0].length / 2)], []),
    s4 = arr
      .slice(arr.length / 2, arr.length)
      .reduce(
        (acc, cur) => [...acc, cur.slice(arr[0].length / 2, arr[0].length)],
        []
      );

  return [s1, s2, s3, s4].reduce(
    (acc, cur) => {
      const result = solution(cur);
      return [acc[0] + result[0], acc[1] + result[1]];
    },
    [0, 0]
  );
}
