const findSum2d = (arr) => {
  let total = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    total += arr[i].reduce((accu, num) => accu + num, 0);
  }
  return total;
};

console.log(
  findSum2d([
    [1, 4, 3, 1],
    [3, 1, 9, 4],
    [0, 5, 2, 6],
    [4, 5, 7, 8],
  ])
);
