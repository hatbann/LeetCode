/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = s.split(' ').reverse().filter(word => word !== '').join(' ');
    console.log(answer);
    return answer;
};