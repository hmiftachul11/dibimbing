function isValidWalk(walk) {
  //  Inisialisasi penghitung untuk langkah utara dan selatan
  let northSteps = 0;
  let southSteps = 0;

  // Perulangan melalui setiap arah dalam berjalan
  for (const direction of walk) {
    // Menambah hitungan untuk langkah utara dan selatan yang sesuai
    switch (direction) {
      case "n":
        northSteps++;
        break;
      case "s":
        southSteps++;
        break;
    }
  }

  // Periksa apakah jumlah langkah utara dan selatan sama, mengindikasikan perulangan tertutup
  return northSteps === southSteps && walk.length === 10;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); // false
console.log(isValidWalk(["w"])); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
