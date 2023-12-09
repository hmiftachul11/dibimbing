// Buat algoritma FlowChart dan Pseudecode  untuk menghitung faktorial suatu bilangan.

// Pseudocode PROGRAM faktorial

// DEKLARASI
// var number : integer
// var factorial : integer

// ALGORITMA:
// INPUT number
// factorial = 1
// FOR i = 1 TO number
//   factorial = factorial * i
//   i = i + 1  
// OUTPUT factorial

// AKHIR PROGRAM


// JS Code
let faktorial = 1;
let n = 5;

for (let i = 1; i <= n; i++) {
  faktorial *= i;
}

console.log("Faktorial dari " + n + " adalah: " + faktorial);
