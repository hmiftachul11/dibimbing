function likes(names) {
  // Jika array `names` kosong, tampilkan "no one likes this"
  if (names.length === 0) {
    return "no one likes this";
  }
  // Jika array `names` hanya berisi satu elemen, tampilkan "{nama} likes this"
  else if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  // Jika array `names` berisi dua elemen, tampilkan "{nama1} and {nama2} like this"
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  // Jika array `names` berisi lebih dari dua elemen, tampilkan "{nama1}, {nama2}, ... and {jumlah} others like this"
  else {
    const othersCount = names.length - 2;
    return `${names[0]}, ${names[1]} and ${othersCount} others like this`;
  }
}

// Test cases
console.log(likes([])); // Output: "no one likes this"
console.log(likes(["Peter"])); // Output: "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // Output: "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // Output: "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Output: "Alex, Jacob and 2 others like this"
