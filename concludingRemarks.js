function solution(n, words) {
    let lastWordOfPrevWord = words[0].slice(-1);
    for(let i= 1; i< words.length; i++){
        const currentWord = words[i];
        const firstWordIndex = words.indexOf(currentWord);
        if(firstWordIndex!=i || currentWord.charAt(0) != lastWordOfPrevWord){
           return[(i%n)+1, parseInt(i/n+1)]
       }
        lastWordOfPrevWord =  currentWord.slice(-1);
    }
    return 	[0, 0];
}