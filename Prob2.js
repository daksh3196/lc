// Uncommon words in a sentence
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let uniqueWrdSet = new Set();
    let rejectSet = new Set();
    let w1 = [], w2 = [];
    w1 = s1.split(' ');
    w2 = s2.split(' ');

    [...w1, ...w2].forEach(w => {
        if (uniqueWrdSet.has(w)) {
            uniqueWrdSet.delete(w);
            rejectSet.add(w);
        } else {
            if(!rejectSet.has(w)){
                uniqueWrdSet.add(w);
            }
        }
    });

    console.log([...uniqueWrdSet]);
    return [...uniqueWrdSet];
};

let s1 = "this apple is is sweet";
let s2 = "this apple is sour";

uncommonFromSentences(s1, s2);