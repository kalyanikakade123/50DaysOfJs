function nthlargest(arr, highest) {
	let x = 0;
    let y = 0;
    let z = 0;
    let temp = 0;
    const tnum = arr.length;
    let flag = false;
    let result = false;

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(arr[x] < arr[z]){
                    temp = arr[z];
                    arr[z] = arr[x];
                    arr[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }
	return (arr[(highest - 1)]);

}

const arr = [ 10, 100, 1000, 10000];
const highest = 2;

console.log(nthlargest(arr, highest));