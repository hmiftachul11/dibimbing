function sortStart(arr) {
  // mengurutkan array menurut abjad (case-sensitive, dan berdasarkan karakter ASCII values)
  arr.sort((a, b) => a.localeCompare(b));

  // Buat new array untuk menampung modified strings dengan "***" di antara karakter
  const sortedArray = arr.map((str) => str.split("").join("***"));

  // Return the first element dari sorting dan modified array
  return sortedArray[0];
}

function testCase(i, o) {
  if (i === o) return `Test Pass: output is ${o} as expected`;
  return `Test Failed: ${i} not equal to ${o}`;
}

// Test cases
console.log(
  testCase(
    sortStart([
      "bitcoin",
      "take",
      "over",
      "the",
      "world",
      "maybe",
      "who",
      "knows",
      "perhaps",
    ]),
    "b***i***t***c***o***i***n"
  )
);
console.log(
  testCase(
    sortStart([
      "turns",
      "out",
      "random",
      "test",
      "cases",
      "are",
      "easier",
      "than",
      "writing",
      "out",
      "basic",
      "ones",
    ]),
    "a***r***e"
  )
);
