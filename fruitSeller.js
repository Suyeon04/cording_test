function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => {
    return b - a;
  });
  for (let i = m; i <= score.length; i += m) {
    answer += score[i - 1] * m;
  }
  return answer;
}
