/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let idx = [];
    let numOfZero = 0;
    for(let i = 0; i<len; i++){
        idx[i] = i+1;
    }
    for(let x of nums){
        idx[x-1] = 0;
    }
    idx.sort(function(a,b){
        return b-a;
    })
    for(let i = len-1; i>=0; i--){
        if(idx[i] === 0) idx.pop();
    }
    
    idx.sort(function(a,b){
        return a-b;
    })
    return idx;
};