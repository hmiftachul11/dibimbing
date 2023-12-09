const lengthConverter = (value, unit) => {
    if (unit === 'meter') {
      return value * 1000;
    } else if (unit === 'inches') {
      return value * 39370;
    } else if (unit === 'cm') {
      return value * 100000;
    } else {
      return `Measurement not available, value is ${value} km`;
    }
  };
  
  // Contoh penggunaan
  console.log("Output:", lengthConverter(10, 'meter')); // Output: 10000
  console.log("Output:", lengthConverter(10, 'inches')); // Output: 393700
  console.log("Output:", lengthConverter(10, 'cm')); // Output: 1000000
  console.log("Output:", lengthConverter(10, 'mile')); // Output: Measurement not available, value is 10 km
  