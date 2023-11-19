function dashWord(sentence, interval) {
  let startIndex = 0;
  while (sentence[startIndex] === " " && startIndex < sentence.length) {
    startIndex++;
  }

  let endIndex = sentence.length - 1;
  while (sentence[endIndex] === " " && endIndex >= 0) {
    endIndex--;
  }

  sentence = sentence.substring(startIndex, endIndex + 1);
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    result += sentence[i];

    if ((i + 1) % interval === 0 && i !== sentence.length - 1) {
      result += "-";
    }
  }

  return result;
}

// TEST CASES
console.log(dashWord("   Semangat!   ", 3)); // Sem-ang-at!
console.log(dashWord(" Uzumaki Naruto ", 2)); // Uz-um-ak-i -Na-ru-to
console.log(dashWord(" 081234567890 ", 4)); // 0812-3456-7890
console.log(dashWord(" Indonesia Hebat ", 10)); // Indonesia -Hebat
console.log(dashWord(" Love Coding ", 1)); // L-o-v-e- -C-o-d-i-n-g
