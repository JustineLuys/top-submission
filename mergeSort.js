const merge = (a, b) => {
  const sortedArray = [];
  const leftLength = a.length;
  const rightLength = b.length;
  let i = 0; // pointer for left half
  let j = 0; // pointer for right half
  let k = 0; // index for sortedArray

  while (i < leftLength && j < rightLength) {
    if (a[i] < b[j]) {
      sortedArray[k++] = a[i++];
    } else {
      sortedArray[k++] = b[j++];
    }
  }

  while (i < leftLength) {
    sortedArray[k++] = a[i++];
  }

  while (j < rightLength) {
    sortedArray[k++] = b[j++];
  }
  return sortedArray;
};

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftHalf = mergeSort(nums.slice(0, mid));
  const rightHalf = mergeSort(nums.slice(mid));
  return merge(leftHalf, rightHalf);
};

const unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(unsortedArray));
