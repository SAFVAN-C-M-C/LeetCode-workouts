class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
var averageOfLevels = function(root) {
    if(!root){
        return []
    }
    const res=[];
    const queue=[root];
    console.log(queue);
    while(queue.length>0){
        const levelSize=queue.length
        let levelsum=0
        for(let i=0;i<levelSize;i++){
            const node=queue.shift()
            levelsum+=node.val;
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        const levelAvg=levelsum/levelSize
        res.push(levelAvg)
    }
    return res
    
};
const tree = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
console.log(averageOfLevels(tree));