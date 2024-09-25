/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    let finalWord = '';

    let level = 1;
    const GAP = 2*(numRows) - 2;
    if(GAP == 0)
        return s;
    while(level <= numRows){
        let i = level - 1;
        if(level == 1 || level == numRows){
            // finalWord = finalWord + gap
            while(i < s.length){
                finalWord = finalWord + s[i];
                i = i + GAP; 
                console.log(i, finalWord);
            }
        } else{
            while(i < s.length){
                finalWord = finalWord + s[i];
                if(s[i + GAP - 2*(level-1)])
                    finalWord = finalWord + s[i + GAP - 2*(level-1)];
                console.log(finalWord);
                i = i + GAP;
            }
        }
        level++;
    }
    return finalWord;
};

console.log(convert('PAYPALISHIRING', 5));