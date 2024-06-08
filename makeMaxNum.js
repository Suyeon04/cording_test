function solution(N, K) {
  let result = [];
  let isPush = false;
  const isEssence = N >= 0 ? true : false;
  if (isEssence) {
    const splitN = String(N).split("");
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
  } else {
    N *= -1;
    while (N != 0) {
      let num = N % 10;
      if (!isPush && num < K) {
        isPush = true;
        result.push(K);
      }
      result.push(num);
      N = parseInt(N / 10);
    }
    if (!isPush) {
      result.push(K);
    }
    return Number(result.reverse().join("")) * -1;
  }
}
