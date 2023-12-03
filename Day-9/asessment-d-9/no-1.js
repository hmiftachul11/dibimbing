function mostFrequentLargestNumbers(numbers) {
  if (numbers.length === 0) {
    return "";
  }

  let maxNumber = numbers[0];
  let maxCount = 1;

  let counts = {};
  counts[maxNumber] = 1;

  for (let i = 1; i < numbers.length; i++) {
    let num = numbers[i];

    if (num > maxNumber) {
      maxNumber = num;
      maxCount = 1;
    } else if (num === maxNumber) {
      maxCount++;
    }

    counts[num] = (counts[num] || 0) + 1;
  }

  return `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${maxCount} kali`;
}


// TEST CASES
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
console.log(mostFrequentLargestNumbers([]));
//''