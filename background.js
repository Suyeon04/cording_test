function solution(wallpaper) {
    var answer = [wallpaper.length, wallpaper[0].length, 0, 0];
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].indexOf('#') === -1) {
            continue;
        }
        const wall = wallpaper[i].split("");
        for (let j = 0; j < wall.length; j++) {
            if (wall[j] == "#") {
                if (answer[0] > i) {
                    answer[0] = i;
                }
                if (answer[1] > j) {
                    answer[1] = j;
                }
                if (answer[2] < i + 1) {
                    answer[2] = i + 1;
                }
                if (answer[3] < j + 1) {
                    answer[3] = j + 1;
                }
            }
        }
    }
    return answer;
}