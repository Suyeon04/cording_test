function solution(s) {
    const answer = [];
    const data = {};
    const splitS = s.split("");
    for (let i = 0; i < splitS.length; i++) {
        const word = data[splitS[i]];
        if (!word) {
            answer.push(-1);
        } else {
            answer.push(i - word + 1);
        }
        data[splitS[i]] = i + 1;
    }
    return answer;
}