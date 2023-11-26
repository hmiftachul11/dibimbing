const data = {
  students: [
    [
      "0001",
      "Ade Alamsyah",
      "Jakarta",
      "21/05/2000",
      ["Membaca", "melukis", "menari"],
    ],
    ["0002", "Roman Alamsyah", "Bandung", "15/01/1996", "Sepak bola"],
    [
      "0003",
      "Ira Alamsyah",
      "Bandar Lampung",
      "01/08/1999",
      ["Memasak", "berkebun"],
    ],
  ],
  total: 3,
};

function PrintDataSiswa(data) {
  for (let i = 0; i < data.students.length; i++) {
    const [no, nama, tempat, tanggalLahir, hobi] = data.students[i];

    console.log(`# Siswa ${i + 1}`);
    console.log(` - no: ${no}`);
    console.log(` - nama: ${nama}`);

    const formattedDate = tanggalLahir
      .split("/")
      .map((part, index) => (index === 1 ? part + " Mei " : part))
      .join(" ");

    console.log(` - tempat, tanggal lahir: ${tempat}, ${formattedDate}`);

    const formattedHobbies = Array.isArray(hobi) ? hobi.join(", ") : hobi;
    console.log(` - hobi: ${formattedHobbies}\n`);
  }
}

PrintDataSiswa(data);
