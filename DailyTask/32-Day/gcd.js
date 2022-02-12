function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    let remainder = a % b;
    return gcd(b, remainder);
  }
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
