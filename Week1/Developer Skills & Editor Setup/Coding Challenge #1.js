// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

function printForecast(arr) {
    let forecastStr = ''; // Initialize an empty string to accumulate the forecast message

    // Iterate over the array
    for (let i = 0; i < arr.length; i++) {
        // For each temperature, append it to the string with the correct day
        forecastStr += `... ${arr[i]}ºC in ${i + 1} days `;
    }

    // Log the complete forecast string to the console
    console.log(forecastStr + '...');
}

// Test data 1
const data1 = [17, 21, 23];
printForecast(data1); // Output: "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Test data 2
const data2 = [12, 5, -5, 0, 4];
printForecast(data2); // Output: "... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days ..."