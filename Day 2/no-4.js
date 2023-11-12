// Buat algoritma FlowChart dan Pseudecode  untuk mencari nilai maksimum dari tiga bilangan

// Pseudecode PROGRAM nilai_huruf

// DEKLARASI
// var nilai : integer
// var huruf : char

// ALGORITMA:
// INPUT nilai

// IF (nilai < 60) THEN
// 	huruf = "D"
// ELSIF (nilai < 75) THEN
// 	huruf = "C"
// ELSIF (nilai < 85) THEN
// 	huruf = "B"
// ELSE
// 	huruf = "A"
// END IF

// OUTPUT huruf

// JS Code
let a = 5
let b = 2
let c = 4;
let maksimum;

if (a >= b && a >= c) {
    maksimum = a;
} else if (b >= a && b >= c) {
    maksimum = b;
} else {
    maksimum = c;
}

console.log("Nilai maksimum dari tiga bilangan adalah: " + maksimum);
