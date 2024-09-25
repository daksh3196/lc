/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(num) {
    let negativeFlag = false;
    if (num < 0)
    {
        negativeFlag = true;
        num = -num ;
    }

    let prev_rev_num = 0, rev_num = 0;
    while (num != 0)
    {
        let curr_digit = num % 10;

        rev_num = (rev_num * 10) + curr_digit;
        if (rev_num >= 2147483647 ||
            rev_num <= -2147483648)
            rev_num = 0;
        if (Math.floor((rev_num - curr_digit) / 10) != prev_rev_num)
        {
            return 0;
        }

        prev_rev_num = rev_num;
        num = Math.floor(num / 10);
    }

    return (negativeFlag == true) ?
                        -rev_num : rev_num;
}

console.log(reverse(3245674));