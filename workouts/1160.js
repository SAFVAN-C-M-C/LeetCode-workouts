function countGoodStrings(words, chars) {
    const charMap = {};

    for (const char of chars) {
      charMap[char] = (charMap[char] || 0) + 1;
    }
  
    return words.reduce((sum, word) => {
      const wordMap = {};
  
      for (const char of word) {
        wordMap[char] = (wordMap[char] || 0) + 1;
      }
  
      const isGood = Object.keys(wordMap).every(char => charMap[char] && wordMap[char] <= charMap[char]);
  
      return sum + (isGood ? word.length : 0);
    }, 0);
  }
console.log(countGoodStrings(["cat", "bt", "hat", "tree"],"atach"));  