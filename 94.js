
//   Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var inorderTraversal = function(root) {
    const result = [];
    function traverse(node) {
        if (node) {
            traverse(node.left);
            result.push(node.val);
            traverse(node.right);
        }
    }
    traverse(root);
    return result;
};


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(11);
root.right.left.left = new TreeNode(12);
root.right.left.right = new TreeNode(13);
root.right.right.left = new TreeNode(14);
root.right.right.right = new TreeNode(15);

root.left.left.left.left = new TreeNode(16);
root.left.left.left.left.left = new TreeNode(17);
root.left.left.right.right = new TreeNode(18);



const result = inorderTraversal(root);
console.log(result);
