function solution(n) {
  while (n.length > 1) {
    n.sort(function (a, b) {
      return b - a;
    });
    let result = null;
    if (n[0] > n[1]) {
      result = n[0] - n[1];
    } else if (n[0] < n[1]) {
      result = n[1] - n[0];
    }
    n = n.slice(2);
    if (!!result) {
      n.push(result);
    }
  }
  return n.length == 0 ? 0 : n[0];
}
