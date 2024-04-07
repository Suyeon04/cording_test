function solution(S) {
    let num = parseInt(S, 2);
    let count = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
        count++;
    }
    return count;
}