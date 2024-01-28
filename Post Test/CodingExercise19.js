// data
const data = [
    {
        name: "Joe",
        age: 23,
        job: "Artist",
        hoby: "Drawing",
    },
    {
        name: "Michael",
        age: 21,
        job: "Engineer",
        hoby: "Fishing",
    },
    {
        name: "Jenifer",
        age: 22,
        job: "Dentist",
        hoby: "Gardening",
    },
];

function createTable(data) {
    // a copy of the data array without modifying the original objects
    const modifiedData = data.map(item => ({ ...item }));

    return modifiedData;
}

// modified data array using the function
const modifiedData = createTable(data);

// the table object with the header and modified data array
const table = {
    header: Object.keys(data[0]),
    data: modifiedData,
};

// resulting table object's data property
console.log(table.data);
