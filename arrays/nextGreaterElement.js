/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {


    const stack = [nums2[nums2.length - 1]];

    for(let i = nums2.length - 2; i >= 0 ; i--) {
        const top = stack.pop();
        if(nums2[i] > nums2[top]) {
            stack.push(i);
        } else {
            stack.push(top);
        }
    }

    for(let i =0; i < nums1.length; i++) {



    }
    
};