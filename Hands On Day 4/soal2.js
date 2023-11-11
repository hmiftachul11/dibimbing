// Dimulai dari kiri

// let angka = 5;
// let result = "";

// for (let i = 0; i < angka; i++) {
//     result = result + "*" ;
//     console.log(result);
// }

// dimulai dari kanan

let angka = 5;
let result = "";

for (let i = 0; i < angka; i++) {
    let spasi = " ".repeat(angka - i - 1);
    result = result + "*";
    console.log(spasi + result);
}

// Menggunakan function

// function PolaAsterisk(jumlahBaris) {
//     for (let i = 1; i <= jumlahBaris; i++) {
//         let spasi = ' '.repeat(jumlahBaris - i);
//         let asterisk = '*'.repeat(i);
//         console.log(spasi + asterisk);
//     }
// }

// PolaAsterisk(5);