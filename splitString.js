function solution(s) {
  let answerCount = 0; // 결과 문자열 개수를 세기 위한 변수
  let i = 0; // 현재 읽고 있는 위치

  while (i < s.length) {
    let right = 0;
    let wrong = 0;
    let startChar = s[i]; // 첫 글자를 기준으로 설정

    // 현재 위치부터 문자열 끝까지 탐색
    for (let j = i; j < s.length; j++) {
      if (s[j] === startChar) {
        right++;
      } else {
        wrong++;
      }

      // 첫 글자와 다른 글자의 빈도가 같아지면 분리
      if (right === wrong) {
        answerCount++;
        i = j + 1; // 다음 위치로 이동
        break;
      }

      // 문자열 끝에 도달했을 경우 처리
      if (j === s.length - 1) {
        answerCount++;
        i = s.length; // 루프를 종료
      }
    }
  }

  return answerCount;
}

