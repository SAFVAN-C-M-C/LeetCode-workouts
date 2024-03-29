var findNumbers = function(nums) {
    let count = 0;
    let digigitcount=0
    for(let i=0;i<nums.length;i++){
        let n=nums[i]
        while(n!==0){
            digigitcount++;
            n=Math.floor(n/10)
        }
        if(digigitcount%2==0){
            count++
        }
    }
    return count
};

console.log(findNumbers([555,901,482,1771]));
