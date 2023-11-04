// Buat algoritma FlowChart dan Pseudecode  sederhana untuk menghitung jumlah huruf vokal dalam sebuah string.

// Inisialisasi variabel "count" dengan 0
let count = 0;

// input string
let inputString = `selamat pagi semuanya` // Mengonversi string ke huruf kecil agar tidak sensitif terhadap huruf besar/kecil

// Loop melalui setiap karakter dalam string
for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString.charAt(i);

    // Periksa apakah karakter adalah vokal
    if ("aeiou".indexOf(currentChar) !== -1) {
        count++;
    }
}

// Tampilkan jumlah huruf vokal
console.log("Jumlah huruf vokal dalam string adalah: " + count);
