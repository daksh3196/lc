/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function (s1, s2) {
    const n = s1.length;
    const m = s2.length;

    // Create a 2D array 'dp' to store dynamic programming results, initialized with -1
    const dp = Array.from({ length: n }, () => Array(m).fill(-1));

    // Define a recursive utility function to calculate the LCS length
    function lcsUtil(ind1, ind2) {
        // Base case: If either string has reached the end, the LCS length is 0
        if (ind1 < 0 || ind2 < 0) {
            return 0;
        }

        // If the result for this combination of indices has already been calculated, return it
        if (dp[ind1][ind2] !== -1) {
            return dp[ind1][ind2];
        }

        // If the characters match, increase the LCS length and move both indices
        if (s1[ind1] === s2[ind2]) {
            return (dp[ind1][ind2] = 1 + lcsUtil(ind1 - 1, ind2 - 1));
        } else {
            // If the characters don't match, consider two options: moving one index in either string
            return (dp[ind1][ind2] = Math.max(
                lcsUtil(ind1, ind2 - 1),
                lcsUtil(ind1 - 1, ind2)
            ));
        }
    }

    // Call the recursive utility function to calculate the LCS length
    return lcsUtil(n - 1, m - 1);
}