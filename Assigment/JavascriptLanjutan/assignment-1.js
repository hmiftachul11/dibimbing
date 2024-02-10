const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanedStr === reversedStr;
};

// Test cases
console.log(isPalindrome("Kasur rusak")); // Output: true
console.log(isPalindrome("saya makan")); // Output: false
