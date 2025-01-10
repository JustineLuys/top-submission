const merge = (a, b) => {
  let sortedArr = [];
  const aLen = a.length;
  const bLen = b.length;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < aLen && j < bLen) {
    if (a[i] < b[j]) {
      sortedArr[k++] = a[i++];
    } else {
      sortedArr[k++] = b[j++];
    }
  }

  while (i < aLen) {
    sortedArr[k++] = a[i++];
  }
  while (j < bLen) {
    sortedArr[k++] = b[j++];
  }
  return sortedArr;
};

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftHalf = mergeSort(nums.slice(0, mid));
  const rightHalf = mergeSort(nums.slice(mid));
  return merge(leftHalf, rightHalf);
};

console.log([
  ...new Set(mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])),
]);
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  sortedArrayToBST(sortedArr, start, end) {
    if (start > end) return null;
    let half = Math.floor((start + end) / 2);
    let root = new Node(sortedArr[half]);
    root.left = this.sortedArrayToBST(sortedArr, start, half - 1);
    root.right = this.sortedArrayToBST(sortedArr, half + 1, end);
    return root;
  }

  buildTree(nums) {
    const sortedArray = [...new Set(mergeSort(nums))];
    return this.sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
  }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.dir(tree.root, { depth: null });
console.log(prettyPrint(tree.root));
