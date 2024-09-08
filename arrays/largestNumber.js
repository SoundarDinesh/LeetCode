/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    nums.sort((a, b) => {


        const p1 = a.toString() + b.toString();
        const p2 = b.toString() + a.toString();

        if(parseInt(p1) >= parseInt(p2)) {
            return -1;
        }

        return 1;

    });

    if(nums[0] === 0) {
        return 0;
    }

    return nums.join('');
};

console.log(largestNumber([3,30,34,5,9]));