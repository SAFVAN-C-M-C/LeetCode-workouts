var productExceptSelf = function(nums) {
    const res = [1, ...new Array(nums.length-1)]
    let prefix=1;
    let postfix=1;

    // Calculate prefix products
    for(let i = 0; i < nums.length - 1; i++){
        res[i + 1] = prefix * nums[i];
        prefix *= nums[i];
    }

    // Calculate postfix products
    for(let i = nums.length - 1; i >= 0; i--){
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res;
}
console.log(productExceptSelf([-1,1,0,-3,3]));