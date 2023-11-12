// Buat algoritma FlowChart dan Pseudecode  sederhana untuk menghitung jumlah huruf vokal dalam sebuah string.

// PSEUDOCODE

// dec vocal = a, i, u, e, o
// dec result =

// input 'makan'
// Loop input WITH INDEX 1
//      Loop vocal WITH INDEX j
//          IF input [i] EQUAL WITH vocal[i]
//              THEN result = input [i]

//  output LENGTH OF result

// Coding Javascript
function hitungVokal(string) {
  string = string.toLowerCase();

  let jumlahVokal = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      jumlahVokal++;
    }
  }

  return jumlahVokal;
}

let kalimat = "programmer";
let hasil = hitungVokal(kalimat);

console.log("Jumlah huruf vokal " + hasil);
