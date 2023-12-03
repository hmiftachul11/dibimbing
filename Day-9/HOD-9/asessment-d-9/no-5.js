function graduates(students) {
  let result = {};

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.score >= 75) {
      let classKeyExists = false;
      for (let key in result) {
        if (key === student.class) {
          classKeyExists = true;
          break;
        }
      }

      if (!classKeyExists) {
        result[student.class] = [];
      }
      result[student.class][result[student.class].length] = {
        name: student.name,
        score: student.score,
      };
    }
  }

  return result;
}

// TEST CASE
console.log(
  graduates([
    { name: "Luffi", score: 90, class: "2A" },
    { name: "Sanji", score: 85, class: "2C" },
    { name: "Zoro", score: 74, class: "2A" },
    { name: "Usop", score: 78, class: "2C" },
  ])
);
//OUTPUT
// { 2A: [  { name: 'Luffi', score: 90 } ],
//   2C: [  { name: 'Sanji' , score: 85 }, { name: 'Usop', score: 78 } ] }

console.log(
  graduates([
    { name: "Naruto", score: 100, class: "ninja" },
    { name: "Sarada", score: 76, class: "olahraga" },
    { name: "Sasuke", score: 92, class: "ninja" },
    { name: "Lee", score: 71, class: "olahraga" },
    { name: "Shikamaru", score: 80, class: "catur" },
  ])
);
//OUTPUT
// { ninja: [ { name: 'Naruto', score: 100 }, { name: 'Sasuke', score: 92 }  ],
//   olahraga: [ { name: 'Sarada', score: 76 }, ],
//   catur: [ { name: 'Shikamaru', score: 80 } ]
// }

console.log(graduates([]));
//OUTPUT
//{}
