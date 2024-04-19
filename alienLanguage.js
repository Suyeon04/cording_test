function solution(spell, dic) {
    for (let data of dic) {
        let answer = 1;
        let checkDic = new Array(spell.length).fill(0);
        for (let dics of data.split("")) {
            if (spell.includes(dics)) {
                checkDic[spell.indexOf(dics)]++;
            }
        }
        console.log(checkDic.filter(data => data != 1))
        for (let checkData of checkDic) {
            if (checkData !== 1) {
                answer = 2;
                break;
            }
        }
        if (answer == 1) {
            return answer;
        }
    }
    return 2;
}