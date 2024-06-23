function solution(bid, ask, n) {
  var answer = 0;
  const sortBid = bid.sort((a, b) => b - a);
  const sortAsk = ask.sort((a, b) => a - b);
  for (let i = 0; i < n; i += 2) {
    if (sortBid[0] > sortAsk[0]) {
      answer += sortBid[0] - sortAsk[0];
      sortBid.shift();
      sortAsk.shift();
    }
  }
  return answer;
}
