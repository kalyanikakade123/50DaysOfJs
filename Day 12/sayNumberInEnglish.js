// const sayNumberInEnglish = (n) => {

// 	return
// }

// console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)

/* Array of units as words */
units = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

/* Array of tens as words */
tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

/* Array of scales as words */
scales = [
  "",
  " thousand ",
  " million ",
  " billion ",
  " trillion ",
  " quadrillion ",
  " quintillion ",
  " sextillion ",
];

function toWords(num){
  let one = Math.floor(num/100);
  let two = Math.floor(num/10)%10;
  let three = num%10;
  let storeWord =  (one>0 ? units[one] + " hundred ": "") + (two>1 ? tens[two] + "-" + units[three] : units[10*two + three])
  return storeWord
}

function numberToEnglish(n) {
  /* Is number zero? */
  if (n.lenght===0) {
    return ;
  }
  if (isNaN(n)){
    return ;
  }
  let splitInThree = [];
  while(n){
    splitInThree.push(n%1000);
    n = parseInt(n/1000,10)
  }
  let words = "";
  let i = 0;
  while(splitInThree.length){
    words = toWords(splitInThree.shift()) + scales[i++] + words;
  }
  

  return words ;
}
console.log(`5635 in english is: ${numberToEnglish(5635)}`)