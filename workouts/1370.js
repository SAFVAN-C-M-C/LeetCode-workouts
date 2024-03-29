var sortString = function (s) {
    let freq = new Map();
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    let arr=Array.from(new Map([...freq.entries()].sort()))
    console.log(arr);
    let i = 0, res = '';
    while(i < s.length){
        for(let j = 0; j < arr.length; j++){
            let curr = arr[j];
            if(curr[1] > 0){
                res += curr[0];
                curr[1]--;
                i++;
            }
        }
        arr.reverse();
    }
    return res;
}
console.log(sortString("aaaabbbbcccc"));