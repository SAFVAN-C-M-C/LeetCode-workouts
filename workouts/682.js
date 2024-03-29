var calPoints = function(operations) {
    const scores=[];
    for(const operand of operations){
        let size=scores.length
        if(operand==='+'){
            let newScore=scores[size-1]+scores[size-2]
            scores.push(newScore)
        }else if(operand==='D'){
            scores.push(scores[size-1]*2)
        }else if(operand==='C'){
            scores.pop();
        }else{
            scores.push(Number(operand))
        }
    }
    return scores.reduce((sum,i)=>sum+=i,0)
};
console.log(calPoints(["5","2","C","D","+"]));
[5,10,15]