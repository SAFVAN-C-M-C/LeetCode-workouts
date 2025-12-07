/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes=[...s].filter((char)=>char==='1').length
    let maxScore=0;
    let leftZeros=0
    let rightOnes=totalOnes;

    for(let i=0;i<s.length-1;i++){
        if(s[i]==='0'){
            leftZeros++
        }else{
            rightOnes--
        }
        let currentScore=leftZeros+rightOnes
        maxScore=Math.max(maxScore,currentScore)
    }
    return maxScore
};
console.log(maxScore("011101"));
