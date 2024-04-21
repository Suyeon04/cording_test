function solution(n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
        let data = i;
        while (Math.floor(data / 2) > 0) {
            answer += data % 2;
            data = Math.floor(data / 2);
            if (data == 1) {
                answer++;
            }
        }
    }
    return answer;
}