// Step 1: Create an arrow function to calculate the average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Step 2: Use the function to calculate the average for both teams
// Test Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

// Test Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// Step 3: Create a function 'checkWinner' that takes the average score of each team as parameters
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
}

// Step 4: Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log("Results for Test Data 1:");
checkWinner(avgDolphins1, avgKoalas1); // Output for Data 1

console.log("Results for Test Data 2:");
checkWinner(avgDolphins2, avgKoalas2); // Output for Data 2