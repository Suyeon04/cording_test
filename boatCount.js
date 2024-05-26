function solution(A, K) {
  let boat = 0;
  let answer = 1;
  for (let data of A) {
    if (boat + data > K) {
      answer++;
      boat = data;
    } else {
      boat += data;
    }
  }
  return answer;
}
