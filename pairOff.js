function solution(S) {
  let stack = [];
  for (let w of S) {
    if (stack.length == 0 || w !== stack[stack.length - 1]) {
      stack.push(w);
    } else {
      stack.pop();
    }
  }
  return stack.length == 0 ? 1 : 0;
}
