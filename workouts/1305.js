function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var getAllElements = function(root1, root2) {
    function inOrderTraversal(node, result = []) {
        if (node !== null) {
          inOrderTraversal(node.left, result);
          result.push(node.val);
          inOrderTraversal(node.right, result);
        }
        return result;
    }
    let fisrtList=inOrderTraversal(root1);
    let secondList=inOrderTraversal(root2);
    return [...fisrtList,...secondList].sort((a,b)=>a-b);
};
let root1=new TreeNode(2);
root1.left=new TreeNode(1);
root1.right=new TreeNode(4);

let root2=new TreeNode(1);
root2.left=new TreeNode(0);
root2.right=new TreeNode(3);

console.log(getAllElements(root1,root2));
lorem