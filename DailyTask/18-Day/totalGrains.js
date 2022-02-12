const totalGrains = (n) => {
    let sum = BigInt(0);
	for(let i=1;i<=n;i++){
		 sum = sum + BigInt(Math.pow(2,i-1));
	} 
	return sum;
}
totalGrains();
const grainsOn = (n) => {
	return BigInt(Math.pow(2,n-1));
}
console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains(5)}`)
