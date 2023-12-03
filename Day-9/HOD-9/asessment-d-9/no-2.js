function passwordGenerator(input) {
  if (input.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  function isAlphabetic(char) {
    return /^[A-Za-z]$/.test(char);
  }

  function isVowel(char) {
    const vowels = "aeiouAEIOU";
    return vowels.includes(char);
  }

  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  let reversedCase = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (isAlphabetic(char)) {
      reversedCase +=
        char === char.toUpperCase()
          ? String.fromCharCode(char.charCodeAt(0) + 32)
          : String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      reversedCase += char;
    }
  }

  let withoutSpaces = "";
  for (let i = 0; i < reversedCase.length; i++) {
    const char = reversedCase[i];
    if (char !== " ") {
      withoutSpaces += char;
    }
  }

  let replacedVowels = "";
  for (let i = 0; i < withoutSpaces.length; i++) {
    const char = withoutSpaces[i];
    if (isVowel(char)) {
      const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
      replacedVowels += nextChar;
    } else {
      replacedVowels += char;
    }
  }

  const reversed = reverseString(replacedVowels);

  return reversed;
}

// TEST CASES
console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
