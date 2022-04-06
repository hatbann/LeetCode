/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = '';
    let str = new Array(strs[0].length);
    for(let i = 0; i<str.length; i++){
        let idxstr = '';
        for(let j = 0; j<i+1; j++){
            idxstr += strs[0][j]; 
        }
        str[i] = idxstr;
    }
    console.log(str);
    let max = -1;
    for(let i = 0; i< str.length; i++){
        let flag = 1;
        for(let j = 1; j<strs.length; j++){
            if(!strs[j].includes(str[i]) || strs[j].indexOf(str[i]) !==0){
                flag = false; 
                break;
            }
        }
        if(flag) max = Math.max(max, i);
    }
    if(max!==-1){
        return str[max];
    }
    return '';
};