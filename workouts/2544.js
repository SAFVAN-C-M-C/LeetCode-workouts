var alternateDigitSum = function(n) {
    let sum=0;
    let sign=1
    let digit=Array.from(String(n),Number);
    for(let i=0;i<digit.length;i++){
        sum+=(digit[i])*sign
        sign*=-1
    }
    return sum
};
console.log(alternateDigitSum(521));