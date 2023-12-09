function mengelompokkanAngka(angka) {
  let kelompokGenap = [];
  let kelompokPrima = [];
  let kelompokTiga = [];

  for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 3 === 0) {
      kelompokTiga[kelompokTiga.length] = angka[i];
    } else if (angka[i] % 2 === 0 && angka[i] % 3 !== 0) {
      kelompokGenap[kelompokGenap.length] = angka[i];
    } else if (isPrima(angka[i])) {
      kelompokPrima[kelompokPrima.length] = angka[i];
    }
  }
  return [kelompokGenap, kelompokPrima, kelompokTiga];
}

function isPrima(angka) {
  if (angka < 2) {
    return false;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(angka)); i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
}

// Test Case
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
