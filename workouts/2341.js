var numberOfPairs = function(nums) {
    const hashTable=new Map;
    for (const num of nums) {
        hashTable.set(num, (hashTable.get(num) || 0) + 1);
    }
    let pairs=0;
    let odds=0;
    for(const [key,value] of hashTable){
        pairs+=Math.floor(value/2);
        odds+=value%2
    }
    return [pairs,odds]
};
console.log(numberOfPairs([1,3,2,1,3,2,2]));