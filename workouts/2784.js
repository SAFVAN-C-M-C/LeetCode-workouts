var isGood = function(nums) {
    const freqMap=new Map();
    let n=nums.length;
    for(let num of nums){
        freqMap.set(num,(freqMap.get(num)||0)+1);
        if(freqMap.get(num)>2) return false
    }
    console.log(freqMap);
    for(let i=1;i<n-1;i++){
        if(!freqMap.has(i) || freqMap.get(i)>=2){
            return false
        }
    }
    if(!freqMap.has(n-1) || freqMap.get(n-1)!==2) return false
    return true
};
console.log(isGood([1, 3, 3, 2]));