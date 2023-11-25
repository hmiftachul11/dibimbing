function hipHura(bilangan) {
  // Loop untuk mengiterasi dari 1 hingga bilangan yang diberikan
  for (let i = 1; i <= bilangan; i++) {
    // Cek apakah bilangan habis dibagi 3 dan 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Hip Hura");
    }
    // Cek apakah bilangan habis dibagi 3
    else if (i % 3 === 0) {
      console.log("Hip");
    }
    // Cek apakah bilangan habis dibagi 5
    else if (i % 5 === 0) {
      console.log("Hura");
    }
    // Jika tidak memenuhi kondisi sebelumnya, cetak bilangan itu sendiri
    else {
      console.log(i);
    }
  }
  // Cetak "done" setelah selesai mengiterasi
  console.log("done");
}

// Contoh pemanggilan fungsi
hipHura(15);
