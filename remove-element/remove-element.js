/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let answer = nums.length;
    let len = nums.length;
    for(let i = 0; i<len; i++){
        if(nums[i] === val){
            nums[i] = 51;
            answer--;
        }
    }
    nums.sort(function(a,b){
        return a-b;
    })
            console.log(nums);
    for(let i = 0; i<nums.length-answer; i++){
        nums.pop();
    }
        console.log(nums);
    return answer;
};