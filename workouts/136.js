var singleNumber = function(nums) {
    const freq=new Map();
    for(let num of nums){
        freq.set(num,(freq.get(num)||0)+1)
    }
    for(let [key,value] of freq){
        if(value ===1){
            return key
        }
    }
    return -1

};

console.log(singleNumber([2,2,1]));