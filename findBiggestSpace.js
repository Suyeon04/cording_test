function solution(A) {
  var answer = 0;
  let x = 0;
  let y = 0;
  let plus = 0;
  while (x != A.length && y != A.length) {
    if (A[x][y] == 1) {
      if (x == y) {
        plus++;
        if (plus > answer) {
          answer = plus;
        }
      }
    } else {
      plus = 0;
    }
    if (x > y) {
      y++;
    } else {
      x++;
    }
  }
  return answer;
}
