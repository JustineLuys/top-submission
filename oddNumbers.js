const oddNumbers = (maxNumber) => {
  let currentNumber = 1;
  while (currentNumber < maxNumber) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }
    currentNumber++;
  }
};
oddNumbers(10);
