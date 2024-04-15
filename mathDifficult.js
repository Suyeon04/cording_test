function solution(answers) {
    var answer = [];
    let a = [0, 0, 0];
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let f = 0;
    let s = 0;
    let t = 0;
    for (let i = 0; i < answers.length; i++) {
        if (f == first.length) f = 0;
        if (s == second.length) s = 0;
        if (t == third.length) t = 0;
        if (first[f++] == answers[i]) {
            a[0]++;
            console.log(a[0]);
        } if (second[s++] == answers[i]) {
            a[1]++;
        } if (third[t++] == answers[i]) {
            a[2]++;
        }
    }
    answer[0] = 1;
    let max = a[0];
    let x = 0;
    for (let i = 1; i < 3; i++) {
        if (max == a[i]) {
            answer[++x] = i + 1;
        } else if (max < a[i]) {
            answer = [];
            answer[0] = i + 1;
            max = a[i];
        }
    }
    return answer;
}