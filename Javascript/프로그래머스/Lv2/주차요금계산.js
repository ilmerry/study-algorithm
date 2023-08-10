function solution(fees, records) {
  var answer = {};
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  let stack = [];

  const getTotalTime = (inTime, outTime) => {
    const [inHour, inMin] = inTime.split(":").map(Number);
    const [outHour, outMin] = outTime.split(":").map(Number);

    return (outHour - inHour) * 60 - inMin + outMin;
  };

  records.forEach((record) => {
    const [time, car, status] = record.split(" ");

    if (status === "IN") {
      stack.push([time, car]);
    } else {
      const [[inTime]] = stack.filter(([, inCar]) => inCar === car);
      const totalTime = getTotalTime(inTime, time);

      answer = { ...answer, [car]: answer[car] + totalTime || totalTime };
      stack = stack.filter(([, inCar]) => inCar !== car);
    }
  });

  while (stack.length) {
    const [inTime, car] = stack.pop();

    const totalTime = getTotalTime(inTime, "23:59");
    answer = { ...answer, [car]: answer[car] + totalTime || totalTime };
  }

  return Object.entries(answer)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .reduce((acc, [, totalTime]) => {
      if (totalTime <= baseTime) {
        return [...acc, baseFee];
      } else {
        const totalFee =
          baseFee + Math.ceil((totalTime - baseTime) / unitTime) * unitFee;
        return [...acc, totalFee];
      }
    }, []);
}
