function majoritySweeper(arr) {
  const frequencyMap = {};

  for (let i = 0; i < arr.length; i++) {
    const nilai = arr[i];
    frequencyMap[nilai] = (frequencyMap[nilai] || 0) + 1;
  }

  let nilaiMayoritas = null;
  let jumlahMayoritas = 0;

  for (let nilai in frequencyMap) {
    //
    if (frequencyMap.hasOwnProperty(nilai)) {
      const jumlah = frequencyMap[nilai];

      if (
        jumlah > jumlahMayoritas ||
        (jumlah === jumlahMayoritas && nilai < nilaiMayoritas)
      ) {
        nilaiMayoritas = Number(nilai);
        jumlahMayoritas = jumlah;
      }
    }
  }

  const hasil = [];
  let indeksHasil = 0;

  for (let k = 0; k < arr.length; k++) {
    const nilai = arr[k];
    if (nilai !== nilaiMayoritas) {
      hasil[indeksHasil] = nilai;
      indeksHasil++;
    }
  }

  return hasil;
}

// Test Case
console.log(majoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(majoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(majoritySweeper([2, 2])); // []
console.log(majoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
