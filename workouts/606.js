function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function tree2str(root) {
    if (!root) {
        return "";
    }

    let result = root.val.toString();

    if (root.left) {
        result += "(" + tree2str(root.left) + ")";
    }

    if (root.right) {
        // Add right subtree only if left subtree is present
        result += "(" + tree2str(root.right) + ")";
    }

    return result;
}

// Example usage:
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3));
const resultString = tree2str(tree);
console.log(resultString);
