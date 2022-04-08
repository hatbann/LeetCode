/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
     k %= len;
    let reverse = function(a,b){
        while(a<b){
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
            a++;
            b--;
        }
    };
    reverse(0,len-1);
    reverse(0,k-1);
    reverse(k,len-1);
    

};