/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let len = arr.length;
    for(let i = 0; i<len; i++){
        arr[i] = arr[i].split('').reverse().join('');
    }
    let answer = arr.join(' ');
    return answer;
};