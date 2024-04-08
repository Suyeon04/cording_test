function solution(s) {
    let stackParentheses = [];
    for(let i of s){
         if (i== '(') {
            stackParentheses.push('(');
        } else {
            if (stackParentheses.length == 0) {
                return false;
            } else {
                stackParentheses.pop()
            }
        }
    }
    return stackParentheses.length == 0;
}