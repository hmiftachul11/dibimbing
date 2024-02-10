function catAndMouse(q, queries) {
    const results = [];

    // Iterate through each query
    for (let i = 0; i < q; i++) {
        const query = queries[i];
        const x = query[0]; // Cat A's position
        const y = query[1]; // Cat B's position
        const z = query[2]; // Mouse C's position

        // Calculate distances
        const distanceCatA = Math.abs(z - x);
        const distanceCatB = Math.abs(z - y);

        // Determine which cat reaches first or if the mouse escapes
        if (distanceCatA < distanceCatB) {
            results.push("Cat A");
        } else if (distanceCatB < distanceCatA) {
            results.push("Cat B");
        } else {
            results.push("Mouse C");
        }
    }

    return results;
}

// Sample input
const queries = [
    [1, 2, 3],
    [1, 3, 2]
];
const q = queries.length;

// Call the function with the sample input
const results = catAndMouse(q, queries);

// Output the results
results.forEach(result => console.log(result));
