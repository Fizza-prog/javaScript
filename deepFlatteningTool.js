function steamrollArray(arr) {
  let result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(steamrollArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

