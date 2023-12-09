// Buat algoritma FlowChart dan Pseudecode yang memeriksa apakah suatu tahun adalah tahun kabisat atau bukan.

// Pseudecode PROGRAM tahun_kabisat

// DEKLARASI
// var tahun : integer

// ALGORITMA:
// INPUT tahun

// IF (tahun % 400 = 0) THEN
// 	OUTPUT "Tahun kabisat"
// ELSEIF (tahun % 4 = 0 AND tahun % 100 != 0) THEN
// 	OUTPUT "Tahun kabisat"
// ELSE
// 	OUTPUT "Bukan tahun kabisat"

// AKHIR PROGRAM

// JS Code
let years = [2020, 2023];

for (let i = 0; i < years.length; i++) {
  let year = years[i];

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " adalah tahun kabisat.");
  } else {
    console.log(year + " bukan tahun kabisat.");
  }
}
