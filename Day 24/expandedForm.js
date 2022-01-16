function expandedForm(num) {
  let numStr = num.toString().split("");

  for (let i = 0; i < numStr.length; i++) {
    for (let y = numStr.length - i; y > 1; y--) {
      numStr[i] += "0";
    }
  }

  return numStr.join("+");
}
