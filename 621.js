var leastInterval = function(tasks, n) {
    const taskCounts = new Array(26).fill(0);
    for (let task of tasks) {
        //task.charCodeAt(0) - 'A'.charCodeAt(0) for getting the value in the array to increment the occurence
        taskCounts[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    // return taskCounts
};
console.log(leastInterval(["A","A","A","B","B","B"],2));