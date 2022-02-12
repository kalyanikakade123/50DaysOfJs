function toWeirdCase(string) {
  var i = 0;
  return [].map.call(string.toLowerCase(), function(char) {
    if (char == "") { i = 3; }
    return i++ % 2 ? char : char.toUpperCase();
  }).join('');
  }
  
  console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
  );
  