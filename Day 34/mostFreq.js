function mostFreq(arr) {
    let unique = [...new Set(arr)];
    let pair = new Map();
    let maxCount =0;
    for(let key of unique){
        let count = 0;
        for(let i in arr){
            if(key == arr[i]){
                count++;
            }
        }
        if(count>1){
            pair.set(key,count);
            maxCount=Math.max(count,maxCount);
        }
    }
    let ran = 0;
    let newarr = [];
    pair.forEach((occurrence,key)=>{
        if(occurrence == maxCount){
            if(ran==0){
                newarr.push(key);
                newarr.push(occurrence);
                ran++;
            }
        }
    })
    return newarr.join(' '); 
}

    const arr = [1, 2, 2, 4, 5, 6, 6];

    console.log(mostFreq(arr));