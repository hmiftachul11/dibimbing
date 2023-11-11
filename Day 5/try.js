// let buah = ['nanas', 'pisang', 'jambu', 'semangka'];
// // buah.push("durian"); // menambahkan ke indeks terakhir
// // buah.pop(); // menghapus indeks terakhir
// // buah.unshift('mangga'); // menambahkan ke indeks pertama
// // buah.shift(); // menghapus indeks pertama

// // buah.push()
// buah.splice(2,1,'alpukat')


// console.log(buah);


let siswa = {
    name: "lala",
    kelas: 1,
    nilai: 70,
    hello: function() {
      console.log("Hello, nama saya " + this.name);
    }
  };
  
  // Memanggil metode hello
  siswa.hello();
  