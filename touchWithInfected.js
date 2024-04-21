function solution(history, infected) {
    let personHistory = [];
    let answer = [];
    let infectedIn = false;
    for (let person of history) {
        if (person == infected) {
            answer = answer.concat(personHistory);
            infectedIn = true;
        } else if (person == infected * -1) {
            infectedIn = false;
        } else {
            if (person > 0) {
                personHistory.push(person);
                if (infectedIn) {
                    answer.push(person)
                }
            } else {
                personHistory = personHistory.filter(data => data !== person * -1)
            }
        }
    }
    answer = [...new Set(answer)];
    return answer.sort(function (a, b) {
        return a - b;
    })
}