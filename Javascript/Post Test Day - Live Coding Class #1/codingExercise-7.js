function wordFormatter(sentence) {
    let formattedSentence = ''; 
    let capitalizeNext = true; 

    // Iterasi melalui setiap karakter dalam kalimat
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === ' ') {
            // if space, keep space
            formattedSentence += char;
            capitalizeNext = true;
        } else {
            // if not space
            if (capitalizeNext) {
                // if true, change character to uppercase
                formattedSentence += char.toUpperCase();
                capitalizeNext = false;
            } else {
                // if false, to lowercase
                formattedSentence += char.toLowerCase();
            }
        }
    }

    return formattedSentence;
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));
