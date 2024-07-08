/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(isOdd(arr[i])){
            count++
        }else{
            count=0
        }
        if(count===3){
            return true
        }
    }
    return false
};

const isOdd=(num)=>{
    return num%2!==0
}

console.log(threeConsecutiveOdds([2,6,4,1]));