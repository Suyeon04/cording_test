function solution(N, K) {
  const splitN = String(N).split("");
  let result = [];
  let isPush = false;
  for (let i = 0; i < splitN.length; i++) {
    if (i < K && !isPush) {
      result.push(K);
      isPush = true;
    }
    result.push(splitN[i]);
    if (i == splitN.length - 1 && !isPush) {
      result.push(K);
    }
  }
  return Number(result.join(""));
}
