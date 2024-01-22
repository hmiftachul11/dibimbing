const number = (busStops) => {
  // Inisialisasi jumlah akhir penumpang
  let totalPassengers = 0;

  // Iterasi melalui setiap elemen array dalam busStops
  for (let i = 0; i < busStops.length; i++) {
    // Menambah jumlah penumpang yang masuk
    totalPassengers += busStops[i][0];

    // Mengurangkan jumlah penumpang yang keluar
    totalPassengers -= busStops[i][1];
  }

  // Mengembalikan jumlah akhir penumpang
  return totalPassengers;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); // 17
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
); // 21
