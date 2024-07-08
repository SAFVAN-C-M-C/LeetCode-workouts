var climbStairs = function (n) {
    if (n == 1) return 1
    if (n == 2) return 2

    let two_back = 1
    let one_back = 2
    for (let i = 2; i < n; i++) {
        let next_num = two_back + one_back
        two_back = one_back
        one_back = next_num
    }
    return one_back

};

console.log(climbStairs(3));