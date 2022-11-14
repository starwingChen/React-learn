
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
  // 根->左->右
  // 输入数组，输出二叉树
  let root = new TreeNode(preorder[0])
  let move = root
  let i = 1
  function search(move, preval){
    if(i >= preorder.length || preorder[i] > preval) return
    move.left = new TreeNode(preorder[i])
    i++
    search(move.left, move.val)
    move.right = new TreeNode(preorder[i])
    i++
    search(move.right, move.val)
  }
  search(move, Infinity)
  return root
};



bstFromPreorder([8, 5, 1, 7, 10, 12])