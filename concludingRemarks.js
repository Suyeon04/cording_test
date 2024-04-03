function solution(n, words) {
    let answer = [];
    for (let i = 1; i < words.length; i++) {
        const index = words.indexOf(words[i]);
        if (index != i || words[i].charAt(0) != words[i - 1].charAt(words[i - 1].length - 1)) {
            return [parseInt(i % n + 1), parseInt(i / n + 1)]
        }
    }
    return [0, 0];
}