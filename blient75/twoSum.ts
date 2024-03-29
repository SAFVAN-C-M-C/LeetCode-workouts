function twoSum(nums: number[], target: number): number[] {
    const hashTable:{[key:number]:number}={};
    for(let i=0;i<nums.length;i++){
        if(hashTable[target - nums[i]]!==undefined){
            return [hashTable[target - nums[i]],i]
        }
        hashTable[nums[i]]=i
    }
    return []
};