// Buat algoritma FlowChart dan Pseudecode  untuk mencari nilai maksimum dari tiga bilangan

// Masukkan tiga bilangan
let a = 5
let b = 2
let c = 4;

// Inisialisasi variabel maksimum dengan salah satu dari tiga bilangan
let maksimum;

if (a >= b && a >= c) {
    maksimum = a;
} else if (b >= a && b >= c) {
    maksimum = b;
} else {
    maksimum = c;
}
// Tampilkan nilai maksimum
console.log("Nilai maksimum dari tiga bilangan adalah: " + maksimum);
