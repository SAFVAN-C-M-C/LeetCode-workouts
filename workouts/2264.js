var largestGoodInteger = function(num) {
    let max = "";

    for (let i = 0; i < num.length - 2; i++) {
        const Substr = num.substring(i, i + 3);
        if (Substr[0] === Substr[1] && Substr[1] === Substr[2] && Substr > max) {
            max = Substr;
        }
    }

    return max;
};

console.log(typeof largestGoodInteger("42352338"));