const removeNegativeWithoutFilter = (inputArray) => {
    const resultArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] >= 0) {
        resultArray[resultArray.length] = inputArray[i];
      }
    }
  
    return resultArray;
  };
  
  // Contoh penggunaan
  const inputArray = [-1, -2, 0, 90, 34];
  const newArrayWithoutFilter = removeNegativeWithoutFilter(inputArray);
  console.log("Output Tanpa Filter:", newArrayWithoutFilter);
  