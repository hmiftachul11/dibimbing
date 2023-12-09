// Buat algoritma FlowChart dan Pseudecode  sederhana untuk menghitung jumlah huruf vokal dalam sebuah string.

// PSEUDOCODE sederhana untuk menghitung jumlah huruf vokal dalam sebuah string.

// DEKLARASI
// vocal = ['a', 'i', 'u', 'e', 'o']
// result = ''
// input = 'makan'

// ALGORITMA:
// FOR EACH character IN input
//   FOR EACH vowel IN vocal
//     IF character EQUALS vowel
//       THEN result = result + character
//     END IF
//   END FOR
// END FOR

// OUTPUT LENGTH OF result

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
