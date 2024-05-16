var removeKdigits = function (num, k) {
    let res = '';
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && res.length > 0 && num[i] < res[res.length - 1]) {
            res = res.slice(0, -1);
            k--;
        }
        res += num[i];
    }
    res = res.slice(0, -k === 0 ? res.length : -k).replace(/^0+/, '');
    return res.length === 0 ? '0' : res;
};

console.log(removeKdigits("10200", 1));

1432219
res = "1"
