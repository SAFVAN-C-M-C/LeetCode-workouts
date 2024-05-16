// var reversePrefix = function(word, ch) {
//     let arr=word.split("");
//     let index=arr.indexOf(ch)
//     let left=0;
//     let right=index;
//     while(left<right){
//         temp=arr[left];
//         arr[left]=arr[right];
//         arr[right]=temp
//         left++;
//         right--
//     }
//     return arr.join('') 
// };
var reversePrefix = function(word, ch) {
    let word=word.substring(0,word.indexOf(ch)+1).split('').reverse().join("");
    let word=word.substring(word.indexOf(ch)+1);
    return w1+w2
};
console.log(reversePrefix("abcdefd","d"));