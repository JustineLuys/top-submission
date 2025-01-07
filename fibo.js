const recursiveFibo = (num) => {
  if (num === 1) return [1];
  if (num === 2) return [1, 1];

  const prevFibs = recursiveFibo(num - 1);
  return [
    ...prevFibs,
    prevFibs[prevFibs.length - 2] + prevFibs[prevFibs.length - 1],
  ];
};

const anotherRecursiveFibo = (num) => {
  if (num < 2) {
    return num;
  }
  return anotherRecursiveFibo(num - 2) + anotherRecursiveFibo(num - 1);
};
console.log(recursiveFibo(8)); // Output: [1, 1, 2, 3, 5, 8, 13, 21]

1, 1, 2, 3, 5, 8, 13, 21;
console.log(anotherRecursiveFibo(8));
