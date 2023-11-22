function solution(babbling) {
    var answer = 0;
    const wording = ["aya", "ye", "woo", "ma" ];
    const wordingLength = [];
    
    wording.forEach((data)=>{
        if(!wordingLength.includes(data.length)){
            wordingLength.push(data.length)
        }
    })

    babbling.forEach((data)=>{
        let isBabbling = false;
        let plus = 0;
        for(let i = 0; i<data.length; i+=plus){
            for(let j = 0; j<wordingLength.length; j++){
                if(wording.includes(data.slice(i, i+wordingLength[j]))){
                    plus = wordingLength[j];
                    isBabbling = true;
                    break;
                }else{
                    isBabbling = false;
                }
            }
            if(!isBabbling){
                break;
            }
        }
        if(isBabbling){
            answer++;
        } 
    })
    return answer;
}