const needsLicense = (kind) => {
  switch (kind) {
    case "car":
      return true;
    case "truck":
      return true;
    default:
      return false;
  }
};

const chooseVehicle = (option1, option2) => {
	let arr = [option1, option2]
  arr.sort();
  return `${arr[0]} is clearly the better choice.`;
};


const calculateResellPrice = (originalPrice, age) => {
  if (age < 3) {
    originalPrice = (originalPrice * 80) / 100;
	return originalPrice;
  } else if (age >= 3 && age < 10) {
    originalPrice = (originalPrice * 70) / 100;
	return originalPrice;
  } else {
    originalPrice = (originalPrice * 50) / 100;
	return originalPrice;
  }
};


