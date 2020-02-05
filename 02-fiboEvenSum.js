function fiboEvenSum(n) {
  let vals = [ 0, 1 ]
  let sum = 0;
  while(n-- > 0 ){
    vals = [vals[1], vals[0] + vals[1]];
    sum += vals[1] % 2 === 0 ? vals[1] : 0
  }
  return sum;
}
