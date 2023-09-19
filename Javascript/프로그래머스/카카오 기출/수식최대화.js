function solution(expression) {
  var answer = 0;

  const ops = new Set(expression.match(/\*|\+|\-/g));
  const perms = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  const candidates = perms.map((perm) => {
    const result = calculate(expression, perm, 0);
    return result < 0 ? -result : result;
  });

  return Math.max(...candidates);
}

function calculate(str, priority, top) {
  let result = 0;
  const op = priority[top];
  const exprs = str.split(op);

  if (exprs.length === 1 && Number(exprs[0])) return Number(exprs[0]);

  exprs.forEach((expr, index) => {
    if (Number(expr)) {
      switch (op) {
        case "*":
          result = index === 0 ? result + Number(expr) : result * Number(expr);
          break;
        case "+":
          result += Number(expr);
          break;
        case "-":
          result = index === 0 ? result + Number(expr) : result - Number(expr);
          break;
      }
    } else {
      switch (op) {
        case "*":
          result =
            index === 0
              ? result + calculate(expr, priority, top + 1)
              : result * calculate(expr, priority, top + 1);
          break;
        case "+":
          result += calculate(expr, priority, top + 1);
          break;
        case "-":
          result =
            index === 0
              ? result + calculate(expr, priority, top + 1)
              : result - calculate(expr, priority, top + 1);
          break;
      }
    }
  });

  return result;
}
