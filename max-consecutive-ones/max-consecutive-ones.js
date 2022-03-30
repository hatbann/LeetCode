/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0, answer = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 1){ 
            cnt++;
            answer = Math.max(answer, cnt);
                         }
        else cnt = 0;
    }
    return answer;
};