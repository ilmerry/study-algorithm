function solution(orders, course) {
  var answer = [];

  course.forEach((num) => {
    const menus = {};
    orders.forEach((order) => {
      const combinations = getCombinations([...order].sort(), num);

      combinations.forEach((combs) => {
        const comb = combs;
        menus[comb] = (menus[comb] || 0) + 1;
      });
    });

    const top = Math.max(...Object.values(menus));
    answer.push(
      Object.keys(menus).filter(
        (menu) => menus[menu] === top && menus[menu] >= 2
      )
    );
  });

  // flat(n)은 모든 n차원 배열을 1차원으로 끌어내린다
  return answer.flat(Infinity).sort();
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el].join(""));
    results.push(...attached);
  });

  return results;
}
