// function swap(subArray){
//   if(subArray[0]>subArray[1]){
//     return subArray.reverse()
//   }
//   return subArray;
//   }
//   console.log(swap([2,1]))

function bubbleSort(array){

  for (let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++ ){
      if(array[j]>array[j+1]){
        let temp= array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
      }
    }
  }
  return array;
}
