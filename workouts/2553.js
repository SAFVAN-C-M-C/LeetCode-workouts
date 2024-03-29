var separateDigits = function(nums) {
    const result=[];
    for(let i=0;i<nums.length;i++){
        result.push(...Array.from(String(nums[i]),Number))
    }
    return result
};
console.log(separateDigits([13,25,83,77]));