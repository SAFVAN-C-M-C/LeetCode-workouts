var findMatrix = function (nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let ans = [];
    while (map.size > 0) {
        let temp = [];
        let toErase = [];
        for (let [f, s] of map) {
            temp.push(f);
            s--;
            if (s === 0) {
                toErase.push(f);
            }
            um.set(f, s);
        }
        ans.push(temp);
        for (let i of toErase) {
            um.delete(i);
        }
    }
    return ans;
}
    console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));