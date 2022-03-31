/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    
    let max = Math.max(...arr);
    let top = arr.indexOf(max);
    
    if(top === arr.length -1 || top ===0) return false;
    
    for(let i = 0, j = 1; i<arr.length-1, j<arr.length; i++, j++){
        if(arr[i]===arr[j]) return false;
        
        if((i<top && j<top && arr[i]>arr[j]) || (i>top && j>top && arr[i]<arr[j])) return false;
    }
    return true;
};