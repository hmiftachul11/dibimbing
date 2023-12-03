function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length === 0) {
    return [];
  }

  const result = [];
  const ruteAngkot = ["A", "B", "C", "D", "E", "F"];
  const tarifPerRute = 2000;

  for (let i = 0; i < arrPenumpang.length; i++) {
    const penumpang = arrPenumpang[i];
    const nama = penumpang[0];
    const naikDari = penumpang[1];
    const tujuan = penumpang[2];

    let naikIndex, turunIndex, jarak;

    for (let j = 0; j < ruteAngkot.length; j++) {
      if (ruteAngkot[j] === naikDari) {
        naikIndex = j;
      }
      if (ruteAngkot[j] === tujuan) {
        turunIndex = j;
      }
    }

    jarak = turunIndex - naikIndex;
    jarak = jarak < 0 ? -jarak : jarak;

    const bayar = jarak * tarifPerRute;

    result[result.length] = {
      penumpang: nama,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    };
  }

  return result;
}

// TEST CASE
console.log(
  naikAngkot([
    ["Melati", "B", "F"],
    ["Herman", "C", "D"],
  ])
);
console.log(
  naikAngkot([
    ["Lala", "A", "D"],
    ["Andre", "A", "F"],
    ["Saeful", "B", "F"],
  ])
);
console.log(naikAngkot([]));
