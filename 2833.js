var furthestDistanceFromOrigin = function(moves) {
    const str=moves.split('');
    let Lcount=0
    let Rcount=0
    let underScorecount=0
    for(const char of str){
        if(char==='L'){
            Lcount++
            jkdfghjkdfkjghjk
        }else if(char==='R'){
            Rcount++
        }else{
            underScorecount++
        }
    }
    return Math.abs(Lcount-Rcount)+underScorecount
};
console.log(furthestDistanceFromOrigin("L_RL__R"));