function solution(babbling) {
    var answer = 0;
    const wording = ["aya", "ye", "woo", "ma"];
    const wordingLength = new Set([...wording].map((word) => word.length));

    babbling.forEach((data) => {
        let isBabbling = false;
        let plus = 0;
        for (let i = 0; i < data.length; i += plus) {
            for (const length of wordingLength) {
                if (wording.includes(data.slice(i, i + length))) {
                    plus = length;
                    isBabbling = true;
                    break;
                } else {
                    isBabbling = false;
                }
            }
            if (!isBabbling) {
                break;
            }
        }
        if (isBabbling) {
            answer++;
        }
    })
    return answer;
}