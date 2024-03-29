var firstPalindrome = function(words) {

    for(i of words){
        if(i===i.split('').reverse().join('')){
            return i
        }
    }
    return "";
};
console.log(firstPalindrome(["abc","car","cool"]));