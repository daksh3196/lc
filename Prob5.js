function hasStringDuplicateChars(s){
    return /(.).*\1/.test(s);
}

/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let max = 0;
    if(!s.length){
        return max;
    } else{
        max = 1;
        let l = 0, r = 0, startIdx = 0, localMax = 1, localStr = '';
        while(l <= r && r < s.length ){
            localStr = s.slice(l, r+1)
            if(hasStringDuplicateChars(localStr)){
                console.log("yes duplicate", max, localMax)                
                max < localMax ? max = localMax : null;
                starIdx = l;

                //slide next
                localMax = 1;
                l = l + 1;
                // r = r + 1; 
            } else{
                localMax = localStr.length;
                r = r + 1; 
                console.log("no duplicate", localStr, localMax, max, startIdx)                
            }
        }
        localMax > max ? max = localMax : null;
        console.log( "length is: ", max, " && string is: ", s.slice(startIdx, max))
        return max;
    }
};