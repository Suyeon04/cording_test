function solution(A) {
  let answer = 0;
  const len = A.length;
  let even = len % 2 == 1 ? len - 1 : len;
  let odd = 1;
  A.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (i + 1 <= len / 2) {
      answer += A[i] * even * -1;
      even -= 2;
    } else {
      answer += A[i] * odd;
      odd += 2;
    }
  }
  return answer;
}
