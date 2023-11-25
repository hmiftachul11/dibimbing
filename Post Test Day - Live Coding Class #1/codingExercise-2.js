const array = [31, 9, 54, 11, 43, 6, 67];

function maxMin(array) {
  let max = array[0];
  let min = array[0];

  // Loop untuk membandingkan setiap elemen dengan nilai max dan min saat ini
  for (let i = 1; i < array.length; i++) {
    // Jika lebih besar dari max, update nilai max
    if (array[i] > max) {
      max = array[i];
    }
    // Jika lebih kecil dari min, update nilai min
    if (array[i] < min) {
      min = array[i];
    }
  }

  // Hasilkan objek yang berisi nilai max dan min
  const result = { max: max, min: min };
  return result;
}

console.log(maxMin(array));
