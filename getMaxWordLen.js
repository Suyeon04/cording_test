function solution(arr) {
  let maxWordLen = 0;
  for (let i of arr) {
    let wordLen = i.split(" ").length;
    if (maxWordLen < wordLen) {
      maxWordLen = wordLen;
    }
  }
  return maxWordLen;
}
