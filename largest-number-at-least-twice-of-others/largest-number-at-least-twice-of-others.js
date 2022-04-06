/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let len = nums.length;
    let max = Math.max(...nums);
    let answer = nums.indexOf(max);
    for(let i = 0; i<len; i++){
        if(i!==answer && nums[i]*2>max){
            answer = -1;
        }
    }
    return answer;
};