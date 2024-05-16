/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const indexMap=new Map();
    const sorted=Array.from(new Set(arr)).sort((a,b)=>a-b);
    sorted.forEach((value,index)=>{
        indexMap.set(value,index+1);
    })
    return arr.map((x)=>indexMap.get(x))
};

console.log(arrayRankTransform([40,10,20,30]));