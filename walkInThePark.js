function solution(park, routes) {
    const splitPark = park.map(row => row.split(""));
    let answer = [0, 0];

    for (let i = 0; i < splitPark.length; i++) {
        const startIndex = splitPark[i].indexOf("S");
        if (startIndex !== -1) {
            answer = [i, startIndex];
            break;
        }
    }

    for (let i = 0; i < routes.length; i++) {
        const [direction, rowRoutes] = routes[i].split(" ");
        let isGoing = true;
        let newRow = answer[0];
        let newCol = answer[1];

        for (let j = 0; j < rowRoutes; j++) {
            if (direction == "E") {
                newCol++;
            } else if (direction == "W") {
                newCol--;
            } else if (direction == "N") {
                newRow--;
            } else if (direction == "S") {
                newRow++;
            }

            if (
                newRow < 0 ||
                newRow >= splitPark.length ||
                newCol < 0 ||
                newCol >= splitPark[0].length ||
                splitPark[newRow][newCol] == "X"
            ) {
                isGoing = false;
                break;
            }
        }

        if (isGoing) {
            answer = [newRow, newCol];
        }
    }

    return answer;
}