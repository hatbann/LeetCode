/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = [];
    for(let i = 0; i<numRows; i++){
        answer[i] = [];
    }
    console.log(answer);
    for(let i = 0; i<numRows; i++){
         answer[i][0] = 1, answer[i][i] = 1;
    }
    for(let i = 0; i<numRows; i++){
        for(let j = 0; j<i-1; j++){
            answer[i][j+1] = answer[i-1][j] + answer[i-1][j+1];
        }
    }
    return answer;
};