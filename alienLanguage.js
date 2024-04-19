function solution(spell, dic) {
    for(let data of dic){
        let checkDic = new Array(spell.length).fill(0);
        for(let dics of data.split("")){
            if(spell.includes(dics)){
                checkDic[spell.indexOf(dics)]++;
            } 
        }
        if(checkDic.findIndex(data => data !== 1)===-1){
            return 1;
        }
    }
    return 2;
}