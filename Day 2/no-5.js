// Buat algoritma FlowChart dan Pseudecode  untuk mencari nilai maksimum dari tiga bilangan

// Masukkan tiga bilangan
let a = 5
let b = 2
let c = 4;

// Inisialisasi variabel maksimum dengan salah satu dari tiga bilangan
let maksimum = a;

// Periksa dan update nilai maksimum
if (b > maksimum) {
    maksimum = b;
}
if (c > maksimum) {
    maksimum = c;
}

// Tampilkan nilai maksimum
console.log("Nilai maksimum dari tiga bilangan adalah: " + maksimum);
