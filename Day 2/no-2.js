// Buat algoritma FlowChart dan Pseudecode  sederhana untuk menghitung jumlah huruf vokal dalam sebuah string.

// PSEUDOCODE

// Dec vocal = a, i, u, e, o
// Dec result = 

// INPUT 'halo'
// loop input
//     loop vocal 
//     input [i] equal with vocal [i]
//     result = input [i]
// OUTPUT length of result

// Coding Javascript
function hitungVokal(string) {
    string = string.toLowerCase();
    
    let jumlahVokal = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
            jumlahVokal++;
        }
    }

    return jumlahVokal;
}

var kalimat = "programmer";
var hasil = hitungVokal(kalimat);

console.log("Jumlah huruf vokal " + hasil);

