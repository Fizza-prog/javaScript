function processNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > 50) {
      continue;
    }

    if (num % 2 === 0) {
      result.push(num * 3);
    }
  }

  return result;
}

