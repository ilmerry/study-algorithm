function solution(p) {
  return isRightString(p) ? p : getRightString(p);
}

function isRightString(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
      continue;
    }

    if (str[i] === ")") {
      const top = stack.pop();
      if (top === "(") continue;
      else return false;
    }
  }

  return stack.length === 0;
}

function reverseBracket(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") reversed += ")";
    else reversed += "(";
  }
  return reversed;
}

function getBalancedIndex(str) {
  let leftCount = 0,
    rightCount = 0;
  let balancedIndex = 0;
  for (; balancedIndex < str.length; balancedIndex++) {
    if (str[balancedIndex] === "(") leftCount++;
    else rightCount++;

    if (leftCount === rightCount) break;
  }
  return balancedIndex;
}

function getRightString(str) {
  if (str.length === 0) return "";
  const balancedIndex = getBalancedIndex(str);
  const u = str.slice(0, balancedIndex + 1);
  const v = str.slice(balancedIndex + 1);

  if (isRightString(u)) {
    const str = getRightString(v);
    return u + str;
  } else {
    const str = "(" + getRightString(v) + ")";
    return str + reverseBracket(u.slice(1, u.length - 1));
  }
}
