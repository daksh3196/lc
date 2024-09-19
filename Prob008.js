var fact = [];

function factorial(n){
    if (n<=1){
        fact[0] = 1;
        return 1;
    } else{
        if(fact[n-1]){
            return fact[n-1];
        } else{
            return n * factorial(n-1);
        }
    }
}

let startt = new Date();
console.log(factorial(10));
let end1 = new Date();
console.log(new Date() - startt);

console.log(factorial(12));
let end2 = new Date();
console.log(end2 - end1);