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
  let result = "";
  let i = 0;
  while (i < monthNames.length) {
    if (i + 1 == month) {
      result = monthNames[i];
      break;
    }
    i++;
  }
  return result;
}

function extractDateParts(dateString) {
  let part = "";
  const parts = [];
  let isParsingDay = true;
  let i = 0;
  while (i < dateString.length) {
    if (dateString[i] === "/") {
      parts[parts.length] = part;
      part = "";
      isParsingDay = !isParsingDay;
    } else {
      part += dateString[i];
    }
    i++;
  }
  parts[parts.length] = part;
  return parts;
}

function PrintDataSiswa(data) {
  let i = 0;
  while (i < data.students.length) {
    const student = data.students[i];

    console.log(`# Siswa ${i + 1}`);
    console.log(` - no: ${student[0]}`);
    console.log(` - nama: ${student[1]}`);

    const tanggalLahirParts = extractDateParts(student[3]);
    const formattedDate = `${tanggalLahirParts[0]} ${getMonthName(
      parseInt(tanggalLahirParts[1], 10)
    )} ${tanggalLahirParts[2]}`;
    console.log(` - tempat, tanggal lahir: ${student[2]}, ${formattedDate}`);

    let formattedHobbies = "";
    let j = 0;
    if (Array.isArray(student[4])) {
      while (j < student[4].length) {
        formattedHobbies += student[4][j];
        if (j < student[4].length - 1) {
          formattedHobbies += ", ";
        }
        j++;
      }
    } else {
      formattedHobbies = student[4];
    }

    console.log(` - hobi: ${formattedHobbies}\n`);
    i++;
  }
}

PrintDataSiswa(data);
