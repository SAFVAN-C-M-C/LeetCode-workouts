/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    function canAchievePenalty(penalty) {
        let operations = 0;
        for (let balls of nums) {
            operations += Math.floor((balls - 1) / penalty);
            if (operations > maxOperations) return false;
        }
        return true;
    }

    let low = 1;
    let high = Math.max(...nums);

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canAchievePenalty(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

console.log(minimumSize([9],2));
