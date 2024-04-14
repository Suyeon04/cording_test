function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    for (let i = 0; i < report.length; i++) {
        report[i] = report[i].split(" ");
    }
    let list = new Array(id_list.length).fill("");
    for (let i = 0; i < report.length; i++) {
        for (let j = 0; j < id_list.length; j++) {
            if (report[i][1] == id_list[j]) {
                list[j] += (report[i][0] + " ");
            }
        }
    }

    for (let i = 0; i < list.length; i++) {
        list[i] = list[i].split(" ");
        const arr = new Set(list[i]);
        list[i] = Array.from(arr);
        if (list[i].length - 1 >= k) {
            for (let j = 0; j < list[i].length - 1; j++) {
                for (let x = 0; x < id_list.length; x++) {
                    if (id_list[x] === list[i][j]) {
                        answer[x]++;
                    }
                }
            }
        }
    }
    return answer;
}