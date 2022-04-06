/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    
    let top = 0, bottom = m-1, left = 0, right = n-1;
        
    let answer = [];
    
    while(answer.length < m*n){
       for(let i = left; i<=right; i++){
           answer.push(matrix[top][i]);
       }
        top++;
        for(let i = top; i<=bottom; i++){
            answer.push(matrix[i][right]);
        }
        right--;
        if(bottom<top) break;
        for(let i = right; i>=left; i--){
            answer.push(matrix[bottom][i]);
        }
        bottom--;
        if(right<left) break;
        for(let i = bottom; i>=top; i--){
            answer.push(matrix[i][left]);
        }
        left++;
    }
    
    return answer;
    

};