// 3. Buatkan function pasanganTerbesar untuk menyelesaikan tase case dibawah

function pasanganTerbesar(angka) {
  let angkaStr = angka.toString();
  let pasanganTerbesar = Number(angkaStr[0] + angkaStr[1]);

  for (let i = 1; i < angkaStr.length - 1; i++) {
    let pasangan = Number(angkaStr[i] + angkaStr[i + 1]);
    if (pasangan > pasanganTerbesar) {
      pasanganTerbesar = pasangan;
    }
  }

  return pasanganTerbesar;
}

// TEST CASES

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
