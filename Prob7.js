let memo = [];


//DP MEMOIZATION TOP_DOWN + RECURSION 
function fib(n){
    if(n < 0){
        return null;
    }
    else if(n == 0 || n == 1){
        memo[0] = 1, memo[1] = 1;
        return 1;
    } else{
        if(memo[n]){
            return memo [n];
        } else{
            return fib(n-1) + fib(n-2);
        }
    }
}


//PLAIN RECURSIVE
// function fib(n){
//     if(n < 0){
//         return null;
//     }
//     else if(n == 0 || n == 1){
//         return 1;
//     } else{        
//         return fib(n-1) + fib(n-2);
//     }
// }

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
let start = new Date;
console.log(fib(11));
let end1 = new Date();
console.log(end1-start); 
console.log(fib(12));
let end2 = new Date();
console.log(end2-end1); 

console.log(fib(21));
let end3 = new Date();
console.log(end3-end2); 

