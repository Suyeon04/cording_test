function solution(s) {
    const splitS = s.split("");
    let bestNum = 0;
    let bestCount = 0;
    for (let i = 0; i < 10; i++) {
        const num = splitS.filter(n => i == n).length;
        if (num > bestCount) {
            bestNum = i;
            bestCount = num;
        }
    }
    return bestNum;
}