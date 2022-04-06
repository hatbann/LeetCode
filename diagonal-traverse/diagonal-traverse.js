/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let arrs = new Array(m+n-1).fill(0).map((ele)=>new Array(0));
    
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            arrs[i+j].push(mat[i][j]);
        }
    }
    
    for(let i = 0; i<arrs.length; i++){
        if(i%2 === 0){
            arrs[i].reverse();
        }
    }
    let answer = [];
    for(let arr of arrs){
        answer.push(...arr);
    }
    return answer;
};