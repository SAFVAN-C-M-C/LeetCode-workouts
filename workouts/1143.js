function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // Create a 2D array to store the length of the common subsequence
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    console.log(dp);
    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // If the characters match, extend the common subsequence
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If the characters don't match, take the maximum of the previous subsequence lengths
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The result is stored in the bottom-right cell of the dp array
    return dp[m][n];
}
console.log(longestCommonSubsequence("abcde","ace"));