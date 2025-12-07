/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const num=String(n);
    let ans=[]
    for(let char of num){
        ans.push(Number(char))
    }
    return ans.reduce((a,b)=>a*=b,1) - ans.reduce((a,b)=>a+=b,0)
};
console.log(subtractProductAndSum(234));
