var pivotInteger = function(n) {
    const pivot=Math.sqrt(n*(n+1)/2)
    if(Number.isInteger(pivot)){
        return pivot
    }else{
        return -1;
    }
    
};
console.log(pivotInteger(8));