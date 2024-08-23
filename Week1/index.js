// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Test data 1
let markWeight1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnWeight1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Test data 2
let markWeight2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnWeight2 = 85; // kg
let johnHeight2 = 1.76; // meters

// BMI Calculation for Test Data 1
let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);
let markHigherBMI1 = markBMI1 > johnBMI1;

// BMI Calculation for Test Data 2
let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output the results
console.log(`Test Data 1: Mark's BMI = ${markBMI1.toFixed(2)}, John's BMI = ${johnBMI1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John in Test Data 1? ${markHigherBMI1}\n`);

console.log(`Test Data 2: Mark's BMI = ${markBMI2.toFixed(2)}, John's BMI = ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John in Test Data 2? ${markHigherBMI2}\n`);

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Function to compare BMIs and print result
function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else if (johnBMI > markBMI) {
        console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    } else {
        console.log(`Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
    }
}

// Compare BMIs for both test data sets
console.log("\nTest Data 1:");
compareBMI(markBMI1, johnBMI1);

console.log("\nTest Data 2:");
compareBMI(markBMI2, johnBMI2);