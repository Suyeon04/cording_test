function solution(num, total) {
    let answer = [];
    let inputNum = Math.floor(total / num) - Math.floor(num/2) + (num%2==0? 1: 0);
    for(let i = 0; i<num; i++){
        answer.push(inputNum);
        inputNum++;
    }
    return answer;
}