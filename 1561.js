function maxCoins(piles) {
    piles.sort((a, b) => b - a);
  
    const n = piles.length / 3;
    let maxCoins = 0;
  
    for (let i = 1; i <= n; i++) {
      maxCoins += piles[i * 2 - 1];
    }
  
    return maxCoins;
  }
  const piles = [2, 4, 1, 2, 7, 8];
  //8,7,4,2,2,1
  //[9,8,7,6,5,1,2,3,4]
  //,,,,5,4,3,,
  //9,8,1
  //7,6,2
  //5,4,3
const result = maxCoins(piles);

console.log(result);