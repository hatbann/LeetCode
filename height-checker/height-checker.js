/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let len = heights.length;
    let idx = [];
    let answer = 0;
    for(let i = 0; i<len; i++){
        idx[i] = heights[i];
    }
    heights.sort(function(a,b){
        return a-b;
    })
    for(let i = 0; i<len; i++){
        if(idx[i] !== heights[i]) answer++;
    }
    return answer;
    
};