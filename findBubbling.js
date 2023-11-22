function solution(babbling) {
    var answer = 0;
    const wording = ["aya", "ye", "woo", "ma" ];
    babbling.forEach((data)=>{
        let isBabbling = false;
        let plus = 0;
        for(let i = 0; i<data.length; i+=plus){
            if(wording.includes(data.slice(i, i+2))){
                plus = 2;
                isBabbling = true;
            }else if(wording.includes(data.slice(i, i+3))){
                plus = 3;
                isBabbling = true;
            }else{
                isBabbling = false;
                break;
            }
        }
        if(isBabbling){
            answer++;
        } 
    })
    return answer;
}