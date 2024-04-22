function solution(n) {
    let answer = 0;
    let realNum = 1;
    while (realNum <= n) {
        answer++;
        if (answer % 3 !== 0 && !answer.toString().includes(3)) {
            realNum++;
        }
    }
    return answer;
}


