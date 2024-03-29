var maxSum = function(nums) {
    const digitMaxMap = new Map();
    let maxSum = -Infinity;

    for (const num of nums) {
        const maxDigit = Math.max(...(num.toString().split('').map(Number)));
        if (!digitMaxMap.has(maxDigit)) {
            digitMaxMap.set(maxDigit, num);
        } else {
            maxSum = Math.max(maxSum, digitMaxMap.get(maxDigit) + num);
            digitMaxMap.set(maxDigit, Math.max(digitMaxMap.get(maxDigit), num));
        }
    }

    return maxSum;
};
console.log(maxSum([51,71,17,24,42]));