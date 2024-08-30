// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Step 1: Write a function 'calcTip' to calculate the tip based on the bill value
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test the function with a bill value of 100
console.log(`Tip for a bill of 100 is: ${calcTip(100)}`); // Expected output: 15

// Step 2: Create an array 'bills' containing the test data
const bills = [125, 555, 44];

// Step 3: Create an array 'tips' containing the tip value for each bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Step 4 (Bonus): Create an array 'total' containing the total values (bill + tip)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Print the arrays to the console
console.log("Bills:", bills); // Expected output: [125, 555, 44]
console.log("Tips:", tips); // Expected output: [18.75, 111, 8.8]
console.log("Total:", total); // Expected output: [143.75, 666, 52.8]