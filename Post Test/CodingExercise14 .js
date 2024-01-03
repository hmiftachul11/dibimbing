function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Sort the characters in both strings and compare them
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("The Eyes", "They See")); // true
console.log(isAnagram("sun", "moon")); // false
