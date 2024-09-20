var longestPalindrome = function(s) {
    const n = s.length;
    
    // All substrings of length 1 are palindromes
    let maxLen = 1, startIdx = 0;

    let arr = Array.from(Array(n), () => Array(n).fill(false));

    //Length 1
    for(let i = 0; i < n; i++)
        arr[i][i] = true;
    

    //Length 2
    for(let i = 0; i < n - 1; i++) {
        if (s[i] === s[i+1]) {
            arr[i][i+1] = true;
            maxLen = 2;
            startIdx = i;
        }
    }

    //length > 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) { // Adjusted loop condition
            let j = i + len - 1;
            if (arr[i+1][j-1] && s[i] === s[j]) {
                arr[i][j] = true;
                if (len > maxLen) {
                    maxLen = len;
                    startIdx = i;
                }
            }
        }
    }

    return s.substring(startIdx, startIdx + maxLen); // Corrected variable name
};