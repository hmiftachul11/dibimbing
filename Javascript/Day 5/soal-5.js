// 5. Buatkan function setRupiah untuk menyelesaikan tase case dibawah

function setRupiah(angka) {
  let formattedRupiah = angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formattedRupiah.replace("IDR", "Rp ");
}

// TEST CASES

console.log(setRupiah(12345)); // Rp 12.345
console.log(setRupiah(100000)); // Rp 100.000
console.log(setRupiah(150)); // Rp 150
console.log(setRupiah(120500000)); // Rp 120.500.000
console.log(setRupiah(5478300)); // Rp 5.478.300
