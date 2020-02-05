function multiplesOf3and5(number) {
  const sumOfN = div => {
    const n = Math.floor((number-1)/div);
    return div * n * (n+1) / 2
  }
  return sumOfN(3) + sumOfN(5) - sumOfN(15);
}
