function solution(numbers, k) {
  var answer = 0;
  while (k > 1) {
    if (answer + 2 > numbers.length) {
      answer = answer + 2 - numbers.length;
    } else {
      answer = answer + 2;
    }
    k--;
  }
  return answer + 1;
}
