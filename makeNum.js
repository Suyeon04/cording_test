// ascii code를 이용한 방법
function stringToInteger(stringNum) {
  const ZERO = "0";
  const splitStringNum = stringNum.split("");
  let answer = 0;

  // 부호가 있는 경우 삭제
  if (splitStringNum[0] === "-" || splitStringNum[0] === "+") {
    splitStringNum.shift();
  }
  let digit = splitStringNum.length - 1;

  for (let stringEle of splitStringNum) {
    const num = stringEle.charCodeAt(0) - ZERO.charCodeAt(0);
    if (num > 9 || num < 0) {
      return null;
    }
    answer += 10 ** digit * num;
    digit--;
  }
  return answer;
}

// javascript의 특성을 이용한 방법
function stringToInteger1(stringNum) {
  const splitStringNum = stringNum.split("");
  let answer = 0;

  // 부호가 있는 경우 삭제
  if (splitStringNum[0] === "-" || splitStringNum[0] === "+") {
    splitStringNum.shift();
  }
  let digit = splitStringNum.length - 1;

  for (let numEle of splitStringNum) {
    let isEssence = false;
    for (let i = 0; i <= 9; i++) {
      if (i == numEle) {
        answer += 10 ** digit * i;
        isEssence = true;
        break;
      }
    }
    if (!isEssence) {
      return null;
    }
    digit--;
  }
  return answer;
}
