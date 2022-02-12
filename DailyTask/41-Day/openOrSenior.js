function openOrSenior(data) {
  let arr = [];
  for (let i of data) {
    console.log(i);
    if (i[0] >= 55 && i[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  }

  return arr;
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
