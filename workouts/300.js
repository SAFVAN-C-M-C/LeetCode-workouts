var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};
console.log(lengthOfLIS([0,1,0,3,2,3]));