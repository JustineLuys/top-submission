const oddLessTen = () => {
  let i = 0;
  const oddNumbersLessThanTen = [];
  while (i < 10) {
    const isOdd = i % 2 !== 0;
    isOdd && oddNumbersLessThanTen.push(i);
    i++;
  }
  return oddNumbersLessThanTen;
};

console.log(oddLessTen());
