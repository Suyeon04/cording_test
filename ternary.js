function solution(n) {
    var answer = new Array().fill(0);
    let x = 0;
    while (n != 0) {
        answer[x] = n % 3;
        n = parseInt(n / 3);
        x++;
    }
    x = 1;
    answer = answer.reverse();
    let answer1 = 0;
    for (let i = 0; i < answer.length; i++, x *= 3) {
        answer1 += answer[i] * x;
    }
    return answer1;
}