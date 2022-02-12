const unionOfArrays = (arr1, arr2) => {
    let getUnion = [...arr1, ...arr2];
  return [...new Set(getUnion)];
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);

