var maximumNumberOfStringPairs = function(words) {
    const wordMap=new Map();
    let count=0
    for(const word of words){
        wordMap.set(word,(wordMap.get(word.split('').reverse().join(''))||0)+1);
        if(wordMap.get(word)>1){
            count++
        }
    }
    return count
};
console.log(maximumNumberOfStringPairs(["aa","ab"]));