function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort(function (a, b) {
    return a - b;
  });
  let sum = arr[0] + arr[1];
  return sum;
}

