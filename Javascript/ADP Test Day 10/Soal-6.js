const findDifferentValues = (array1, array2) => {
    const differentValues = [];
  
    // Periksa nilai yang ada di array1 tetapi tidak ada di array2
    for (const value of array1) {
      if (!array2.includes(value)) {
        differentValues.push(value);
      }
    }
  
    // Periksa nilai yang ada di array2 tetapi tidak ada di array1
    for (const value of array2) {
      if (!array1.includes(value)) {
        differentValues.push(value);
      }
    }
  
    return differentValues;
  };
  
  // Contoh penggunaan
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  const differentValues = findDifferentValues(array1, array2);
  console.log("Output:", differentValues);
  