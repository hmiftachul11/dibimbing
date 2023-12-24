function sockMerchant(socks) {
  // Objek untuk menyimpan jumlah masing-masing warna kaos kaki
  let sockCount = {};

  // Menghitung jumlah masing-masing warna kaos kaki
  for (let sock of socks) {
    sockCount[sock] = (sockCount[sock] || 0) + 1;
  }

  // Menghitung jumlah pasangan kaos kaki
  let totalPairs = 0;
  for (let count of Object.values(sockCount)) {
    // Menggunakan floor division (bagi) untuk mendapatkan jumlah pasangan
    totalPairs += Math.floor(count / 2);
  }

  return totalPairs;
}

// Test Cases
console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]));
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]));
