// Test data
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Function to calculate tip
function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Calculate tips for the test data
const tip1 = calculateTip(bill1);
const tip2 = calculateTip(bill2);
const tip3 = calculateTip(bill3);

// Print the results
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);