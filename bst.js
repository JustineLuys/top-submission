const constructTree = (nums) => {
  const tree = {};
  const arrLen = nums.length;

  for (let i = 0; i < arrLen; i++) {
    if (i === 0) {
      tree.val = nums[i];
      tree.next = null;
    }
    if (nums[i] > tree.val) {
      tree.next.val = nums[i];
      tree.next.val.next = null;
    }
  }
  return tree;
};
const nums = [5, 7, 1, 15, 9, 2, 14, 8, 7, 3];

console.log(constructTree(nums));
