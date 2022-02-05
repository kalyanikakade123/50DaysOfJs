function getDivisorsCnt(num) {
    let count = 0;
    for (let i = 1; i <= 100000; i++){
        if(num%i == 0){
            count++;
        }
    } 
    return count++;
}
console.log(getDivisorsCnt(900))
  