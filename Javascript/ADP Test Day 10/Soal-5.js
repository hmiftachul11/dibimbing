const findCommonValuesWithoutIncludes = (array1, array2) => {
    const commonValues = [];
  
    for (let i = 0; i < array1.length; i++) {
      const value = array1[i];
  
      // Periksa apakah nilai tersebut juga terdapat di array2
      let found = false;
      for (let j = 0; j < array2.length; j++) {
        if (value === array2[j]) {
          found = true;
          break;
        }
      }
  
      // Jika ditemukan, tambahkan ke dalam commonValues
      if (found) {
        commonValues.push(value);
      }
    }
  
    return commonValues;
  };
  
  // Contoh penggunaan
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  const commonValuesWithoutIncludes = findCommonValuesWithoutIncludes(array1, array2);
  console.log("Output Tanpa Includes:", commonValuesWithoutIncludes);
  