/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev1 = 1, prev2 =1;
    for(let i = 2; i<=n;i++){
        let curr = prev1+ prev2;
        prev2 = prev1;
        prev1 = curr; 
    }
    return prev1;
};

console.log(climbStairs(17))