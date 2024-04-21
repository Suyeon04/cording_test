function solution(s) {
    const alpha = s.split("");
    let alphaArray = [];
    for (let data of alpha) {
        if (alphaArray.includes(data)) {
            return data;
        } else {
            alphaArray.push(data);
        }
    }
    return '';
}