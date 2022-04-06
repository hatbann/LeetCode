/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let len = nums.length;
    let sum = 0;
    console.log(nums);
    if((len/2)%2 === 0){
        for(let i = 0; i<len/2; i+=2){
            sum += nums[i];
            sum += nums[len - i -2];
         }   
    }
    else{
        for(let i = 0; i<len/2-1; i+=2){
            sum += nums[i];
            sum += nums[len - i -2];
            console.log(sum);
         }
        sum+= nums[len/2 - 1];
    }
    return sum;
    
};