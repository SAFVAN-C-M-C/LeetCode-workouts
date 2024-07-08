// var singleNumber = function(nums) {
//     const digits=new Set();
//     for(let num of nums){
//         if(digits.has(num)){
//             digits.delete(num)
//         }else{
//             digits.add(num)
//         }
//     }
//     return Array.from(digits)
// };
var singleNumber = function(nums) {
    let xor = 0;
    for (const num of nums) {
        xor ^= num;
    }
    let diffBit = 1;
    while ((xor & diffBit) === 0) {
        diffBit <<= 1;
    }
    let num1 = 0, num2 = 0;
    for (const num of nums) {
        if ((num & diffBit) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    return [num1, num2];
};
console.log(singleNumber([1,2,1,3,2,5]));