function largestPrimeFactor(number) {
  let currFactor = 2;
  let largestFactor = 1;
  while (number > 1) {
    if (number % currFactor === 0) {
      largestFactor = currFactor;
      number /= currFactor;
    }
    currFactor++;
  }
  return largestFactor;
}
