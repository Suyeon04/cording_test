function solution(park, routes) {
    for (let i = 0; i < park.length; i++) {
        park[i] = park[i].split("");
    }
    var answer = park[0].indexOf("S");
    answer = [0, answer];
    for (let i = 0; i < routes.length; i++) {
        const data = routes[i].split(" ");
        if (data[0] == "E" && park[answer[0]][Number(data[1]) + Number(answer[1])] == 'O') {
            answer[1] = Number(data[1]) + Number(answer[1]);
        }
        else if (data[0] == "N" && park[Number(answer[0]) - Number(data[1])][answer[1]] == 'O') {
            answer[0] = Number(answer[0]) - Number(data[1])
        }
        else if (data[0] == "W" && park[answer[0]][Number(answer[1]) - Number(data[1])] == 'O') {
            answer[1] = Number(answer[1]) - Number(data[1]);
        } else if (data[0] == "S" && park[Number(answer[0]) + Number(data[1])][answer[1]] == 'O') {
            answer[0] = Number(answer[0]) + Number(data[1])
        }
        console.log(answer)
    }
    return answer;
}


// park를

// [["S","O","O"],["O","O","O"],["O","O","O"]]

// // E -> 2
// [0,0]
// [0, 2] -> ok
// // S -> 2
// [2.0]
// [2, 2] -> ok
// // W -> 1
// [2, 1] 


