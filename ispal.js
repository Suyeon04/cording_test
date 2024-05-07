function solution(s) {
  let word = s[0];
  let result = [];
  for (let i = 1; i < s.length; i++) {
    console.log(s[i] == word);
    if (word !== s[i] && s[i + 1] !== s[i]) {
      result.push(s[i]);
    }
    word = s[i];
  }
  // for(let data of s){
  //     if(data!=word){
  //         word = data;
  //         result.push(data)
  //     }
  // }
  return result.join("");
}
