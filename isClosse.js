function solution(S) {
  const openBracket = ["(", "{", "[", "<"];
  const closeBracket = [")", "}", "]", ">"];
  const bracketArray = [];
  for (let word of S) {
    if (openBracket.includes(word)) {
      bracketArray.push(word);
    } else {
      let last = bracketArray.pop();
      if (openBracket.indexOf(last) !== closeBracket.indexOf(word)) {
        return 0;
      }
    }
  }
  return 1;
}
