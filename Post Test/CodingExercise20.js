const arr = [
    "this random text.",
    "He drank life before spitting it out.",
    "There's a reason that roses have thorns.",
    "He waited for the stop sign to turn to a go sign.",
    "Karen believed all."
];

const longestString = (arr) => {
    // variable to store the longest string
    let longest = "";

    arr.forEach((str) => {
        // if the current string is longer than the stored longest string
        if (str.length > longest.length) {
            // If yes, update the longest string
            longest = str;
        }
    });

    return longest;
};

// the result
console.log(longestString(arr));
