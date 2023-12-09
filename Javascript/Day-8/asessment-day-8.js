class Summation {
  constructor(array) {
    this.array = array;
  }

  sum() {
    let total = 0;

    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array[i].length; j++) {
        total += this.array[i][j];
      }
    }

    return total;
  }
}

class DeepSum extends Summation {
  constructor(array) {
    super(array);
  }

  deepSum() {
    return this.sum();
  }
}

function deepSum(array) {
  const deepSumInstance = new DeepSum(array);
  return deepSumInstance.deepSum();
}

console.log(
  deepSum([
    [1, 4, 2, 5],
    [5, 7, 8, 9],
    [6, 4, 8, 1],
  ])
); // 60

console.log(
  deepSum([
    [40, 6, 11, 3],
    [7, 90, 13, 52],
    [90, 77, 78, 44],
  ])
); // 511

console.log(deepSum([])); // 0
