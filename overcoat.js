function solution(n, m, section) {
    let answer = 1;
    let startingSection = section[0];
    for (let i = 1; i < section.length; i++) {
        if (m <= section[i] - startingSection) {
            startingSection = section[i];
            answer++;
        }
    }
    return answer;
}