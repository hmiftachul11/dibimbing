const checkPalindrom = (data) => {
  // Menghapus spasi dan mengubah huruf menjadi huruf kecil untuk memastikan pengecekan yang tepat
  const cleanedData = data.replace(/\s/g, "").toLowerCase();

  // Membalik urutan karakter dalam string
  const reversedData = cleanedData.split("").reverse().join("");

  // Memeriksa apakah string asli dan string yang dibalik identik
  return cleanedData === reversedData;
};

console.log(checkPalindrom("kasur")); // false
console.log(checkPalindrom("radar")); // true
