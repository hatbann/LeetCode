/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0;
    let len = nums.length;
    let answer = 0;
    let sum = 0;
    
    while(right<len){
        sum+=nums[right];
        
        while(sum>=target){
            let idxlen = right-left + 1;
            if(answer ===0 || idxlen<answer) answer = idxlen;
            sum-= nums[left];
            left ++;
            console.log(answer);
        }
        
        right++;
    }
    return answer;
};