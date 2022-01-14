let uniqueInOrder = (iterable) => {
      let newArr = []
      for (let i=0;i < iterable.length;i++){
          if(iterable[i] != iterable[i+1]){
              newArr.push(iterable[i])
          }
      }
      return newArr;
  }
  