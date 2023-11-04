// Buat algoritma FlowChart dan Pseudecode  untuk menghitung faktorial suatu bilangan.

// Inisialisasi variabel faktorial dengan 1
let faktorial = 1;

// Masukkan bilangan (n)
let n = 5;

// Hitung faktorial
for (let i = 1; i <= n; i++) {
    faktorial *= i;
}

// Tampilkan nilai faktorial
console.log("Faktorial dari " + n + " adalah: " + faktorial);
