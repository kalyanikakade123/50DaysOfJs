function wave(str) {
  let waveArr = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
    }
  }
  return waveArr;
}

console.log(wave("hello"));
