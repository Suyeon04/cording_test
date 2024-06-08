function solution(lineUp, level) {
  let personIndex = -1;
  for (let i = 0; i < lineUp.length; i++) {
    if (lineUp[i] == 1) {
      if (personIndex !== -1 && i - personIndex - 1 < level) {
        return false;
      }
      personIndex = i;
    }
  }
  return true;
}
