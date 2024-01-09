function solution(park, routes) {
    for (let i = 0; i < park.length; i++) {
        park[i] = park[i].split("");
    }
    var answer = park[0].indexOf("S");
    answer = [0, answer];
    for (let i = 0; i < routes.length; i++) {
        const data = routes[i].split(" ");
        data[1] = Number(data[1]);
        let isGoing = true;

        let a = 0;
        let b = 0;

        if (data[0] == "N" || data[0] == "S") {
            b = answer[0];
        } else {
            b = answer[1];
        }

        for (let j = b; a <= data[1] && b < park.length && b >= 0; a++) {
            if (data[0] == "E" && park[answer[0]][j] == 'O') {
                j++;
            }
            else if (data[0] == "N" && park[j][answer[1]] == 'O') {
                j--;
            }
            else if (data[0] == "W" && park[answer[0]][j] == 'O') {
                j++
            } else if (data[0] == "S" && park[j][answer[1]] == 'O') {
                j--;
            } else {
                isGoing = false;
                break;
            }
        }

        if (isGoing) {
            if (data[0] == "E") {
                answer[1] = Number(data[1]) + Number(answer[1]);
                j++;
            }
            else if (data[0] == "N") {
                answer[0] = Number(answer[0]) - Number(data[1])
                j--;
            }
            else if (data[0] == "W") {
                answer[1] = Number(answer[1]) - Number(data[1]);
                j++
            } else if (data[0] == "S") {
                answer[0] = Number(answer[0]) + Number(data[1])
                j--;
            }
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


