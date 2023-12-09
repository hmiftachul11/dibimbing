function fibonacci(n) {
    // Inisialisasi dua nilai awal deret Fibonacci
    let a = 0;
    let b = 1;

    // Iterasi sebanyak n kali untuk menghasilkan deret Fibonacci hingga n bilangan
    for (let i = 0; i < n; i++) {
        console.log(a); // Print nilai saat ini dari deret Fibonacci

        // Hitung nilai berikutnya dalam deret Fibonacci
        let next = a + b;

        // Geser nilai a dan b untuk iterasi berikutnya
        a = b;
        b = next;
    }
}

// Contoh penggunaan
fibonacci(20)
// fibonacci(21); // meampilkan iterasi lebih untuk 20 bilangan mencakup output 6765
