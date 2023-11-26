let data = [
  {
    title: "The Only Guide You Need",
    score: 8,
    status: "Posted",
  },
  {
    title: "The Advanced Guide To Archive",
    score: 5,
    status: "Unposted",
  },
  {
    title: "In Defense of the Figurative Use of Literally.",
    score: 6,
    status: "Unposted",
  },
  {
    title: "The Best Ways to Do Market Research For Your Business Plan",
    score: 7,
    status: "Unposted",
  },
  {
    title: "The Only Guide You Need Part 2",
    score: 8,
    status: "Unposted",
  },
];

function Jobs(array) {
  // Lakukan iterasi pada setiap objek dalam array
  for (let i = 0; i < array.length; i++) {
    // Periksa apakah score lebih dari sama dengan 7 dan status Unposted
    if (array[i].score >= 7 && array[i].status === "Unposted") {
      // Jika kondisi terpenuhi, ubah status menjadi Posted
      array[i].status = "Posted";
    }
  }

  // Kembalikan array yang telah dimodifikasi
  return array;
}

// Panggil fungsi Jobs dan cetak hasilnya
console.log(Jobs(data));
