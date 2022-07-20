/**
 * @param {number} n
 * @return {boolean}
 */
function divide(n){
    const nums = String(n).split("");
    const sum = nums.reduce((ac, cur) =>{
        const squared = Math.pow(Number(cur),2); //제곱
        return ac+=squared;
    }, 0);
    return sum;
}

var isHappy = function(n) {
    const stack = new Array();
    stack.push(divide(n));
    while(1){
        const f = stack[stack.length - 1]; //마지막 요소
        const n = divide(f);
        if(n===1) return true;
        if(stack.includes(n)) return false; //이미 요소가 존재하는 경우
        stack.push(n);
    }
};