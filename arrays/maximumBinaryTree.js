/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {

    const maxStack= [TreeNode(nums[0], undefined, undefined)];

    for(let i =1; i < nums.length; i++) {

        let lastPopped;

        let newNode;
        while(maxStack.length > 0) {
            if(nums[i] < maxStack[maxStack.length - 1].val) {
                newNode = TreeNode(nums[i], undefined, undefined);
                const topnode = maxStack[maxStack.length - 1];
                const currentRight = topnode.right;
                topnode.right = newNode;
                newNode.left = currentRight;
                break;
            }

            if(nums[i] > maxStack[maxStack.length - 1].val) {
                lastPopped = maxStack.pop();
            }
        }

        if(maxStack.length === 0) {
            newNode = TreeNode(nums[i], undefined, undefined);
            newNode.left = lastPopped;
        }

        maxStack.push(newNode);
    }

    return maxStack[0];
};
var TreeNode = function(val, left, right) {
    const treeNode = {};
    treeNode.val = (val === undefined ? 0 : val)
    treeNode.left = (left === undefined ? null : left)
    treeNode.right = (right === undefined ? null : right);

    return treeNode;
}

const val = constructMaximumBinaryTree([3,2,1,6,0,5]);
console.log(val);