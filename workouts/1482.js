/**
 * @param {number[]} bloomDay
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @param {number} mid
 * @return {number}
 */
const check=(arr, m, k,mid)=>{
    let total=0
    let c=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=mid){
            c++;
            if(c===k){
                total++
                c=0
            }
        }else{
            c=0
        }
    }
    return total>=m ? true :false
}
var minDays = function(bloomDay, m, k) {
    if(m*k>bloomDay.length){
        return -1
    }
    let start=Math.min(...bloomDay);
    let end=Math.max(...bloomDay);
    let ans=-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(check(bloomDay,m,k,mid)){
            ans=mid
            end=mid-1;
        }else{
            start=mid+1
        }
    }
    return ans
};

console.log(minDays([1000000000,1000000000],1,1));