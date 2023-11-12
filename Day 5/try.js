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
  
  // TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true