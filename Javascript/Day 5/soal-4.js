// 4. Buatkan function targetTerdekat untuk menyelesaikan tase case dibawah

function targetTerdekat(arr) {
  let indexO = arr.indexOf("o");
  let indexX = arr.indexOf("x");
  let jarakTerdekat = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      indexO = i;
    } else if (arr[i] === "x") {
      let jarak = Math.abs(indexO - i);
      if (jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
    }
  }
  return jarakTerdekat === Infinity ? 0 : jarakTerdekat;
}

// TEST CASES

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
