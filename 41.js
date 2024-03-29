var firstMissingPositive = function(nums) {
    const hashtTable=new Map();
    for(let num of nums){
        hashtTable.set(num,true);
    }
    let i=1;
    while(true){
        if(!hashtTable.has(i)){
            return i
        }
        i++
    }
};
console.log(firstMissingPositive([1,2,0]));