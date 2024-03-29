var sumIndicesWithKSetBits = function(nums, k) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if (bitSetCount(i)===k) {
            sum+=nums[i]
        }
    }
    return sum;
};
const bitSetCount=(num)=>{
    const binaryNum=num.toString(2);
    return (binaryNum.match(/1/g) || []).length
}
console.log(sumIndicesWithKSetBits([5,10,1,5,2],1));