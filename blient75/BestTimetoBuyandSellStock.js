var maxProfit = function(prices) {
let profit=0;
let buyingDay=prices[0];
for(let i=1;i<prices.length;i++){
    let cost=prices[i]-buyingDay
    profit=Math.max(profit,cost);
    buyingDay=Math.min(prices[i],buyingDay);
}
return profit
};
console.log(maxProfit([7,6,4,3,1]));