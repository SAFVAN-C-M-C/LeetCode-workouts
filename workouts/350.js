/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map()
    let res = []
    if (nums1.length > nums2.length) {
        for (let num of nums2) {
            map.set(num, (map.get(num)) + 1 || 1)
        }
        for (let num of nums1) {
            if (map.has(num)) {
                res.push((num))
                map.set(num, map.get(num) - 1)
                if (map.get(num) === 0) {
                    map.delete(num)
                }
            }
        }
    } else {
        for (let num of nums1) {
            map.set(num, (map.get(num)) + 1 || 1)
        }
        for (let num of nums2) {
            if (map.has(num)) {
                res.push((num))
                map.set(num, map.get(num) - 1)
                if (map.get(num) === 0) {
                    map.delete(num)
                }
            }
        }
    }

    return res
};
console.log(intersect([1, 2, 2, 1], [2, 2]));

