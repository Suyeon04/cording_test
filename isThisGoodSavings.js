function solution(p, m, d) {
  var answer = 0;
  for (let i = 0; i <= 100; i++) {
    const result = compoundInterest(p, 1 + 0.01 * i, m);
    if (result >= d) {
      return i;
    }
  }
  return answer;
}
function compoundInterest(principal, rate, month) {
  if (month === 0) {
    return principal;
  }
  let interest = principal * rate;
  return compoundInterest(interest, rate, month - 1);
}
