const isLeap = (year) => {
	if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLeap(2020))