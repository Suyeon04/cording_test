function solution(A) {
  let divideMoney = 50000;
  let divideCount = 2;
  let answer = 0;
  while (A > 0 && divideMoney >= 1) {
    if (A >= divideMoney) {
      let now = Math.floor(A / divideMoney);
      A -= now * divideMoney;
      answer += now;
    }
    divideCount = divideCount == 5 ? 2 : 5;
    divideMoney /= divideCount;
  }
  return answer;
}
