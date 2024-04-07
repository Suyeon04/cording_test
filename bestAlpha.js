function solution(s) {
    var answer = true;
    const pangram = s.split('');
    for (let i = 97; i < 123; i++) {
        if (!pangram.includes(String.fromCharCode(i))) {
            return false;
        }
    }

    return answer;
}