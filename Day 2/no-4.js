// Buat algoritma FlowChart dan Pseudecode yang memeriksa apakah suatu tahun adalah tahun kabisat atau bukan.

// Inisialisasi array tahun-tahun
let years = [2020, 2023];

// Loop melalui setiap tahun dalam array
for (let i = 0; i < years.length; i++) {
    let year = years[i];

    // Cek apakah tahun adalah tahun kabisat
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " adalah tahun kabisat.");
    } else {
        console.log(year + " bukan tahun kabisat.");
    }
}

