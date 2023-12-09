function AngkaPalindrome(angka) {
  let nextNumber = angka;

  while (!isPalindrome(nextNumber)) {
    nextNumber++;
  }
  return nextNumber;
}

function isPalindrome(angka) {
  let str = angka.toString();
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}

// Test Case
console.log(AngkaPalindrome(8)); // 8
console.log(AngkaPalindrome(10)); // 11
console.log(AngkaPalindrome(117)); // 121
console.log(AngkaPalindrome(175)); // 181
console.log(AngkaPalindrome(1000)); // 1001
