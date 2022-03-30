/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let answer = 0;
    for(let i of nums){
        const str = i.toString();
        let digit = str.length;
        if((digit%2)===0) answer++;
    }
    return answer;
};