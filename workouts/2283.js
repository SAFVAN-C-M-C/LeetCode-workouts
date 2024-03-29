var digitCount = function(num) {
    const freq = new Map();


    for (let digit of num) {
        digit = parseInt(digit);
        freq.set(digit, (freq.get(digit) || 0) + 1);
    }
    for (let i = 0; i < num.length; i++) {
        const digit = parseInt(num[i]);
        if (freq.get(i) !== digit && freq.get(i)!==undefined ) {
            return false;
        }
    }

    return true;
};
console.log(digitCount("1210"));