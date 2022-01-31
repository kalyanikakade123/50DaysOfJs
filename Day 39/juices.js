const timeToMixJuice = (name) => {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
};
timeToMixJuice("Energizer");

const limesToCut = (wedgesNeeded, limes) => {
    let noOfLimes = 0;
    let noOfWedges = 0;
    for (let i in limes){
      if(limes[i] == 'small'){
        noOfWedges += 6;
      }
      if(limes[i] == 'medium'){
        noOfWedges += 8;
      }
      if(limes[i] == 'large'){
        noOfWedges += 10;
      }
      noOfLimes++;
      if(noOfWedges >= wedgesNeeded){
        break;
      }
    }
  return noOfLimes;
};

const remainingOrders = (timeLeft, orders) => {
  let time = 0;
  let newOrders = orders;
  for(let i of orders){
    time += timeToMixJuice(orders[i]);
    newOrders.splice(0,1)
    if(timeLeft <= time){
      break;
    }
  }
  return newOrders;
};
