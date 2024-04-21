function solution(arr) {
    var answer = 100;
    for (let data of arr) {
        answer = Math.min(data, answer);
    }
    return answer;
}