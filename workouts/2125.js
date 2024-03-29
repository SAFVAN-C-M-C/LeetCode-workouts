var numberOfBeams = function(bank) {
    let prevRowCount = 0;
    let total = 0;

    const calc = (s) => {
        return s.split('').reduce((count, c) => count + parseInt(c), 0);
    };

    for (const row of bank) {
        const curRowCount = calc(row);
        if (curRowCount === 0)
            continue;
        total += curRowCount * prevRowCount;
        prevRowCount = curRowCount;
    }
    return total;
};
console.log(numberOfBeams(["011001","000000","010100","001000"]));