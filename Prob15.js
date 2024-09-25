/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let intNum = 0;
    let neg = false;
    s = s.trim();
    if(s[0] == "-"){
        console.log("iff")
        neg = true;
        s = s.slice(1, s.length);
        console.log(s)
    } else if(s[0] == "+"){
        console.log("elsee iff")
        neg = false;
        s = s.slice(1, s.length);
    } 
    // else{
        console.log("elsee")
        let firstDigFound = false, i=0;
        while(i<s.length && s.charCodeAt(i) < 58 && s.charCodeAt(i) > 47){
            // if(!(intNum === 0 && s.charCodeAt(i) == 48)){
            //     intNum = intNum*10 + parseInt(s[i]);                
            // }
            intNum = intNum*10 + parseInt(s[i]);
            console.log("innn", s[i], intNum)
            i++;
        }
    // }
    console.log("outt", s)
    return neg ? Math.max(-intNum, -2147483648): Math.min(intNum, 2147483647);
};