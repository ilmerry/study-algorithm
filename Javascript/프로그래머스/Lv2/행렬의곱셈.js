function solution(arr1, arr2) {
  var answer = Array.from(new Array(arr1.length), () =>
    new Array(arr2[0].length).fill(0)
  );

  // mk X kn = mn 행렬
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
