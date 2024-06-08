function solution(A, K) {
  A.sort((a, b) => b - a);
  const firstNumIndex = Math.floor(K / A.length);
  let result = A[firstNumIndex] * 10;
  A.splice(firstNumIndex, 1);
  const secondNumIndex = (K - 1) % A.length;
  result += A[secondNumIndex];
  return result;
}
