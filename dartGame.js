function solution(dartResult) {
  var answer = 0;
  // [2,4,9]
  // split 한다
  // S, D, T를 split한다
  // *과 #의 위치를 확인한다
  // *인데 0이면 상관없는데 1이상이면 앞에 숫자도
  // #이면 -1 곱하기
  // 세개 다 더하기
  const splitDartResult = dartResult.split("");
  let result = [];
  let number = "";
  for (let w of splitDartResult) {
    if (!isNaN(w)) {
      number += w;
      continue;
    }
    number = Number(number);
    if (w == "S") {
      result.push(number);
    } else if (w == "D") {
      result.push(number ** 2);
    } else if (w == "T") {
      result.push(number ** 3);
    } else if (w == "*") {
      if (result.length == 1) {
        result[0] = result[0] * 2;
      } else {
        result[result.length - 1] = result[result.length - 1] * 2;
        result[result.length - 2] = result[result.length - 2] * 2;
      }
    } else if (w == "#") {
      result[result.length - 1] = result[result.length - 1] * -1;
    }
    number = "";
  }

  return result.reduce((sum, num) => sum + num);
}
