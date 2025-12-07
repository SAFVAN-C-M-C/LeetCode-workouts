/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = words.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (vowel.has(words[i][0]) && vowel.has(words[i][words[i].length - 1])) {
            prefix[i + 1] = prefix[i] + 1;
        } else {
            prefix[i + 1] = prefix[i];
        }
    }
    const ans = [];
    for (let [start, end] of queries) {
        ans.push(prefix[end + 1] - prefix[start]);
    }

    return ans;
};
console.log(vowelStrings(["a","e","i"],[[0,2],[0,1],[2,2]]));
