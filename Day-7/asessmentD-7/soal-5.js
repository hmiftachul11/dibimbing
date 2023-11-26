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

function getMonthName(month) {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return monthNames[parseInt(month, 10) - 1];
}

function PrintDataSiswa(data) {
  for (let i = 0; i < data.students.length; i++) {
    const student = data.students[i];

    console.log(`# Siswa ${i + 1}`);
    console.log(` - no: ${student[0]}`);
    console.log(` - nama: ${student[1]}`);

    const tanggalLahirParts = [];
    let part = "";
    for (let j = 0; j < student[3].length; j++) {
      if (student[3][j] === "/") {
        tanggalLahirParts.push(part);
        part = "";
      } else {
        part += student[3][j];
      }
    }
    tanggalLahirParts.push(part);

    const formattedDate = `${tanggalLahirParts[0]} ${getMonthName(
      tanggalLahirParts[1]
    )} ${tanggalLahirParts[2]}`;
    console.log(` - tempat, tanggal lahir: ${student[2]}, ${formattedDate}`);

    const formattedHobbies = Array.isArray(student[4])
      ? student[4].join(", ")
      : student[4];
    console.log(` - hobi: ${formattedHobbies}\n`);
  }
}

PrintDataSiswa(data);
