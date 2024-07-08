var smallestNumber = function(pattern) {
    const n = pattern.length;
    const result = new Array(n + 1);
    const stack = [];
    let digit = 1;
    
    for (let i = 0; i <= n; i++) {
        stack.push(i); 
        if (i == n || pattern[i] == 'I') {
            while (stack.length > 0) {
                result[stack.pop()] = digit++;
            }
        }
    }
    return result.join('');
};

console.log(smallestNumber("IIIDIDDD"));