let m = 0, n = 0;

//Recursive Approach
var isSubsequence = function(s, t) {
    if(t.length < s.length) return false;
    if(m == s.length)
        return true;
    else if(n == t.length)
        return false;
    else{
        if(s[m] == t[n]){
            m++;
            n++;
            return isSubsequence(s, t);
        } else{
            n++;
            return isSubsequence(s, t);
        }
    }

};

console.log(isSubsequence('axc', "ahbgdc"))