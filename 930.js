var numSubarraysWithSum = function(nums, goal) {
    const count=new Map()
    count.set(0,1);
    let currentSum=0;
    let totalSubArray=0;
    for(let num of nums){
        currentSum+=num;
        if(count.has(currentSum-goal)){
            totalSubArray+=count.get(currentSum-goal)
        }
        count.set(currentSum,(count.get(currentSum)||0)+1)
    }
    return totalSubArray
};
console.log(numSubarraysWithSum([1,0,1,0,1],2));


