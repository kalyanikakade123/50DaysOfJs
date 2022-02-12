function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else if (n < 0) {
    return -1;
  } else {
    return n * factorial(n - 1);
  }
}

let n = 6;
console.log("The factorial of " + n + " is " + factorial(n));
