function duckShoot(ammo, aim, ducks) {
  // Menghitung jumlah bebek yang diharapkan
  const expectedHits = Math.floor(aim * ammo);

  let actualHits = 0;

  // Lakukan perulangan melalui setiap karakter dalam string bebek
  for (let i = 0; i < ducks.length; i++) {
    // Periksa apakah karakter tersebut adalah '2' dan tambahkan actualHits
    if (ducks[i] === "2") {
      actualHits++;

      // Ganti '2' dengan 'X' jika actualHits kurang dari atau sama dengan expectedHits
      if (actualHits <= expectedHits) {
        ducks = ducks.substring(0, i) + "X" + ducks.substring(i + 1);
      }
    }
  }

  return ducks;
}

// Test Case
console.log(duckShoot(4, 0.64, "|~~2~~~22~2~~22~2~~~~2~~~|")); // Output: '|~~X~~~X2~2~~22~2~~~~2~~~|'
console.log(duckShoot(9, 0.22, "|~~~~~~~2~2~~~|")); // Output: '|~~~~~~~X~2~~~|'
console.log(duckShoot(6, 0.4, "|~~~~~22~2~~~~~|")); // Output: '|~~~~~XX~2~~~~~|'
