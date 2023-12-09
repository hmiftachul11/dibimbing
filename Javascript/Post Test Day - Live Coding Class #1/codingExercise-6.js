function manipulateString(str) {
    let result = ""; // untuk menampung string
  
    // iterasi setiap karakter dalam string
    for (let i = 0; i < str.length; i++) {
      // memeriksa apakah karakter merupakan huruf kapital
      if (i > 0 && str[i] === str[i].toUpperCase()) {
        result += " "; // spasi ditambahkan sebelum karakter jika huruf kapital
      }
      result += str[i]; 
    }
  
    return result;
  }
  
  console.log(manipulateString("SelamatPagiDunia")); // Output: Selamat Pagi Dunia
  console.log(manipulateString("AkuSukaJavascript")); // Output: Aku Suka Javascript
  