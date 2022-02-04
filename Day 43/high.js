function high(x){
    let as = x.split(' ').map(x => [...x].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
    );
    return x.split(' ')[as.indexOf(Math.max(...as))];
  }

