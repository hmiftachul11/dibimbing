function removeDuplicates(str) {
  // Inisialisasi array kosong untuk menyimpan karakter unik
  let uniqueChars = [];

  // Lakukan iterasi pada setiap karakter dalam string
  for (let char of str) {
    // Periksa apakah karakter sudah ada dalam array uniqueChars
    if (!uniqueChars.includes(char)) {
      // Jika belum ada, tambahkan karakter ke array
      uniqueChars.push(char);
    }
  }

  // Kembalikan array uniqueChars yang berisi karakter unik
  return uniqueChars;
}

// Panggil fungsi removeDuplicates dan cetak hasilnya
console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
console.log(removeDuplicates("RRRRROOOAAQPPP"));
