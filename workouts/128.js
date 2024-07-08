// var longestConsecutive = function(nums) {
//     if (nums.length===0) return 0
//     let numSet=Array.from(new Set(nums));
//     numSet.sort((a,b)=>a-b);
//     let count =1
//     let longest=1
//     for(let i=1;i<numSet.length;i++){
//         if (numSet[i]==numSet[i-1]+1){
//             count++
//             longest=Math.max(longest,count)
//         }else{
//             count=1
//         }
//     }
//     return longest 
// };

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));


function longestConsecutive (nums) {
    let s = new Set(nums);
    let longest = 0;
    for (let num of s) {
        if (!s.has(num-1)) {
            let curr = 1
            while (s.has(num+1)) {
                curr++
                num++
            }
            longest = Math.max(longest, curr)
        }
    }
    return longest
};