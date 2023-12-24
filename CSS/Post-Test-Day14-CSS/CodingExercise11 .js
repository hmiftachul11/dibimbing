function charCount(word) {
  let charCountObj = {};

  for (let char of word) {
    // Mengubah karakter menjadi huruf kecil
    let lowercaseChar = char.toLowerCase();

    // Jika karakter adalah spasi atau karakter khusus lainnya, abaikan
    if (lowercaseChar === " ") {
      // Jika karakter adalah spasi, gunakan karakter spasi sebagai kunci dalam objek
      charCountObj[" "] = (charCountObj[" "] || 0) + 1;
      continue;
    }

    charCountObj[lowercaseChar] = (charCountObj[lowercaseChar] || 0) + 1;
  }

  return charCountObj;
}

// Test Cases
console.log(charCount("Dibimbing di"));
console.log(charCount("Software"));
console.log(charCount("Frontend"));
