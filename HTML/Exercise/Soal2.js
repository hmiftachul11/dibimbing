function unitTest(input, output) {
  console.log(output, input === output);
}

function reverse(str) {
  // Memisahkan string menjadi array karakter, membalikkan urutan, menggabungkannya kembali menjadi string
  // Mengkapitalisasi huruf pertama dan menggabungkan sisa string
  return (
    str
      .split("")
      .reverse()
      .join("")
      .replace(/^(.)/, (match) => match.toUpperCase()) + "."
  );
}

unitTest(reverse("drow olleh"), "Hello word."); // output: Hello word. true
unitTest(reverse("eko atad"), "Data oke."); // output: Data oke. true
unitTest(reverse("gnitset tinu"), "Unit testing."); // output: Unit testing. true
