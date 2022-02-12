// function getMiddle(str) {
//   let position;

//   if (str.length % 2 == 1) {
//     position = str.length / 2;
//     length = 1;
//   } else {
//     position = str.length / 2 - 1;
//     length = 2;
//   }

//   return str.substring(position, position + length);
// }

function getMiddle(s) {
  const i = Math.floor(s.length / 2);
  let result = s[i];
  if (s.length % 2 === 0 && i > 0) {
    result = s[i - 1] + result;
  }
  return result;
}
