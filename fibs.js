const fibs = (num) => {
  const firstNumber = 0;
  const secondNumber = 1;
  const nums = [firstNumber, secondNumber];
  if (num === 1) return [nums[0]];
  for (let i = 2; i < num; i++) {
    const result = nums[i - 2] + nums[i - 1];
    nums.push(result);
  }
  return nums;
};

const recursiveFibs = (num) => {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const prevFibs = recursiveFibs(num - 1);
  return [
    ...prevFibs,
    prevFibs[prevFibs.length - 2] + prevFibs[prevFibs.length - 1],
  ];
};
