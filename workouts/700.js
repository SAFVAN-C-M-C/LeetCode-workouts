function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var searchBST = function(root, val) {
    if(val===root.val){
        return root
    }
    let current=root
    while(current.left!==undefined && current.right!==undefined){
        if(val<current.val){
            current=current.left
        }else if(val>current.val){
            current=current.right
        }else if(val ===current.val){
            return current
        }
    }
    return null
};

const root=new TreeNode(4)
root.left=new TreeNode(2);
root.right=new TreeNode(7)
root.left.left=new TreeNode(1);
root.left.right=new TreeNode(3)

console.log((searchBST(root,2)));