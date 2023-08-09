function getSetLength(arr1, arr2) {
  const arr3 = [...arr2];
  let count = 0;

  arr1.forEach((e, i) => {
    for (let j = 0; j < arr2.length; j++) {
      if (e === arr2[j]) {
        arr2.splice(j, 1);
        count++;
        break;
      }
    }
  });

  return { intersection: count, union: arr1.length + arr3.length - count };
}

function getStrSet(str) {
  const s = str.toLowerCase();
  const arr = [];

  for (let i = 0; i < s.length - 1; i++) {
    const substr = s[i] + s[i + 1];
    if (/^[a-z]{2}$/g.test(substr)) arr.push(substr);
  }

  return arr;
}

function solution(str1, str2) {
  var { intersection, union } = getSetLength(getStrSet(str1), getStrSet(str2));

  return union ? parseInt((intersection / union) * 65536) : 65536;
}
