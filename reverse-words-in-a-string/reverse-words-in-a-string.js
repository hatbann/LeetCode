/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let len = s.length;
    let temp = '';
    let answer = '';
    for(let i = len-1; i>=0; i--){
        if(s[i] !== ' '){ // 공백이 아니라면
            temp += s[i];
            console.log(1);
        }
        else if(s[i] === ' ' && s[i+1]!== ' ' && i!==len-1){
            temp = temp.split("").reverse().join("");
            answer += temp + ' ';
            temp = '';
            console.log(2);
        }
        else{
            temp = '';
            console.log(3);
        }
        
    }
    if(temp !== '') answer += temp.split("").reverse().join("");
    len = answer.length;
    if(answer[len - 1] === ' ') answer = answer.substring(0,len-1);
    return answer;
};