/**
 *
 * @param {number[]} inputArray Array of numbers
 */
 const longestConsecutiveSequence = (arr) => {
	// Your code here
    arr = [...new Set(arr)];
  
  //sort
  arr = arr.sort((a,b) => a - b);
  
  let max = 0;
  let count = 0;
      
  // find the maximum length
  // by traversing the array
  for (let i = 0; i < arr.length; i++) {

    // check if the current element is
    // equal to previous element +1
    if (i > 0 && arr[i] === arr[i - 1] + 1){
      count++;
    }
    else{
      count = 1;
    }

    // Update the maximum
    max = Math.max(max, count);
  }

	return max;
}
// console.log(longestConsecutiveSequence([100,4,200,1,3,2]));