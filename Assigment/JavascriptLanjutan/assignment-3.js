function timeConversion(s) {
    // Split the input string to extract hours, minutes, seconds, and AM/PM
    const timeComponents = s.split(":");
    const hours = parseInt(timeComponents[0]);
    const minutes = timeComponents[1];
    const secondsAndPeriod = timeComponents[2].split(/(?=[AP]M)/);
    const seconds = secondsAndPeriod[0];
    const period = secondsAndPeriod[1];

    // Convert hours to 24-hour format
    let militaryHours;
    if (period === 'AM') {
        militaryHours = hours === 12 ? '00' : hours.toString().padStart(2, '0');
    } else {
        militaryHours = hours === 12 ? '12' : (hours + 12).toString().padStart(2, '0');
    }

    // Construct the 24-hour time string
    const militaryTime = `${militaryHours}:${minutes}:${seconds}`;

    return militaryTime;
}

// Sample input
const s = '07:05:45PM';

// Output the result
console.log(timeConversion(s)); // Output: '19:05:45'
