function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (
      arr.slice(0, i).reduce((a, b) => a + b) ===
      arr.slice(i + 1).reduce((a, b) => a + b)
    ) {
      return i;
    }
  }
  return -1;
}
