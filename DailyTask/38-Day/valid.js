const valid = (string) => {
  let newStr = string.split(" ").join("");
  let arr = Array.from(newStr);
  if (arr.length <= 1) {
    return false;
  }
  for (let i = 0; i < arr.length; i += 2) {
    let product = 1;
    product = parseInt(arr[i]) * 2;
    if (product > 9) {
      product = product - 9;
    }
    arr[i] = product;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return (sum % 10 == 0) 
};
console.log(valid("4539 3195 0343 6467"));
