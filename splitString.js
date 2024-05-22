function solution(s) {
  let answerList = [];
  let leng = 0;
  for (let i = 0; i < s.length; i++) {
    let right = 0;
    let wrong = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] == s[i]) {
        right++;
      } else {
        wrong++;
      }
      if (right == wrong || (wrong == 0 && j == s.length)) {
        answerList.push(s.slice(leng, j + 1));
        i = j;
        leng = j + 1;
        break;
      }
    }
  }
  return answerList.length;
}
