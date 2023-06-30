// 나의 풀이
function solution(s) {
  var answer = [];
  var cache = "";
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]; // 이 외의 string은 주어지지 않음

  [...s].forEach((letter) => {
    const parsed = parseInt(letter);
    if (numbers.includes(parsed)) {
      answer.push(parsed);
    } else {
      cache += letter;
    }

    if (words.includes(cache)) {
      answer.push(numbers[words.indexOf(cache)]);
      cache = "";
    }
  });

  return parseInt(answer.join("")); // praseInt보다 Number가 더 빠름
}

// split, join 풀이법
// split과 join은 단순히 구분자의 역할이 아닌 대체자의 역할을 수행할 수도 있다: split + join => replace
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]; // 0-9까지의 숫자 배열 따로 필요없음! 인덱스가 숫자역할
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); // 0-9를 돌면서 영단어를 기준으로 split. ex) "1two3" => ['1', '3']
    answer = arr.join(i); // 인덱스를 splitter로 삼아서 합침 ex) ['1', '3'] -> '123'
  }

  return Number(answer);
}

// 정규표현식을 사용한 풀이법
// Reagex 중에 g flag는 표현식을 만족시키는 패턴이 한개 이상 있는지 검사한다 ex) let reg = new RegExp(string, 'g');
// 이때 i 옵션이 들어가면, 대/소문자 구분을 안한다는 뜻, m은 여러줄 검색
// replace(패턴매칭(정규식)문자열, 변경할 문자열)
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return Number(s);
}
