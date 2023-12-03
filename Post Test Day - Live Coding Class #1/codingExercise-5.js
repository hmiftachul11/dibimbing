function countVowels(str, vowels) {
  let count = 0; // untuk menyimpan jumlah vokal dalam string

  for (let i = 0; i < str.length; i++) { // iterasi melalui setiap karakter dalam string
    if (vowels.includes(str[i].toLowerCase())) { // memeriksa apakah karakter merupakan huruf vokal
      count++; // jika iya, tambahkan satu ke jumlah vokal
    }
  }

  return count;
}

let vowels = ["a", "i", "u", "e", "o"];

console.log(countVowels("Selamat Pagi Duniaa!!", vowels)); // Output: 9
console.log(countVowels("aku suka ngoding", vowels)); // Output: 6
