var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1) return 0
    let count=0,left=0,right=0,product=1;
    const n=nums.length;
    while(right<n){
        product*=nums[right];
        while(product>=k) product/=nums[left++];
        count+=1+(right-left);
        right++
    }
    return count
};
console.log(numSubarrayProductLessThanK([10,5,2,6],100));