function cariMean(arr) {
  let jumlahElemen = arr.length;
  let totalNilai = 0;

  for (let i = 0; i < jumlahElemen; i++) {
    totalNilai += arr[i];
  }
  let rataRata = totalNilai / jumlahElemen;
  // Cara 1
  // let mean = Math.round(rataRata);
  // Cara 2
  let mean;
  if (rataRata % 1 < 0.5) {
    mean = Math.floor(rataRata);
  } else {
    mean = Math.ceil(rataRata);
  }

  return mean;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 8, 9, 5])); // 5
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
