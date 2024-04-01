function solution(n, s) {
    if (s < n) {
        return [-1];
    } else {
        const remainder = s % n;
        const quotient = parseInt(s / n);
        let result = new Array(n).fill(quotient);
        for (let i = 0; i < remainder; i++) {
            result[result.length - i - 1]++;
        }
        return result;
    }
}