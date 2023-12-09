// Sumber Soal: https://dibimbing-lms-dev.s3.ap-southeast-1.amazonaws.com/1700673809806-hod89.js

function findBigValue(arrayOfObjects) {
  if (arrayOfObjects.length === 0) {
    return "Data kosong";
  }

  let maxObject = arrayOfObjects[0];

  for (let i = 1; i < arrayOfObjects.length; i++) {
    if (arrayOfObjects[i].nilai > maxObject.nilai) {
      maxObject = arrayOfObjects[i];
    }
  }

  return `Nilai terbesar adalah ${maxObject.name} dengan nilai ${maxObject.nilai}`;
}

console.log(
  findBigValue([
    { name: "susi", nilai: 90 },
    { name: "ahmad", nilai: 88 },
    { name: "Lala", nilai: 91 },
  ])
);
// output: Nilai terbesar adalah Lala dengan nilai 91

console.log(findBigValue([]));
// output: Data kosong
