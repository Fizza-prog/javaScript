function frankenSplice(array1, array2, index) {
  let newArr = array2.slice();   
  newArr.splice(index, 0, ...array1); 
  return newArr;
}