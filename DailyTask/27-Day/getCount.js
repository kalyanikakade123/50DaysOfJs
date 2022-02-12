const vowels = ["a", "e", "i", "o", "u"];
function getCount(str) {
  let vowelsCount = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"));

// OR By Using Regex Method

// function countVowel(str) { 

//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return count;
// }
// console.log(countVowel("abracadabra"));