function solution(k, score) {
  const answer = [];
  const ranking = [];
  for (let i = 0; i < score.length; i++) {
    ranking.push(score[i]);
    ranking.sort(function (a, b) {
      return b - a;
    });
    answer.push(ranking.length < k ? ranking[i] : ranking[k - 1]);
  }
  return answer;
}
