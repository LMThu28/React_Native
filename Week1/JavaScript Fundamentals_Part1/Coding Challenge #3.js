// Test data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Test data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Test data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Function to calculate average score
function calculateAverage(scoreArray) {
    return (scoreArray[0] + scoreArray[1] + scoreArray[2]) / 3;
}

// Function to determine the winner
function determineWinner(dolphinsAvg, koalasAvg) {
    const minScore = 100;

    if (dolphinsAvg > koalasAvg && dolphinsAvg >= minScore) {
        return "Dolphins win the trophy!";
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= minScore) {
        return "Koalas win the trophy!";
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= minScore && koalasAvg >= minScore) {
        return "It's a draw!";
    } else {
        return "No team wins the trophy.";
    }
}

// Calculate average scores for each test data
const avgDolphins1 = calculateAverage(dolphinsScores1);
const avgKoalas1 = calculateAverage(koalasScores1);

const avgDolphinsBonus1 = calculateAverage(dolphinsScoresBonus1);
const avgKoalasBonus1 = calculateAverage(koalasScoresBonus1);

const avgDolphinsBonus2 = calculateAverage(dolphinsScoresBonus2);
const avgKoalasBonus2 = calculateAverage(koalasScoresBonus2);

// Output results for each test data
console.log("Test Data 1:");
console.log("Dolphins average score:", avgDolphins1);
console.log("Koalas average score:", avgKoalas1);
console.log(determineWinner(avgDolphins1, avgKoalas1));

console.log("\nTest Data Bonus 1:");
console.log("Dolphins average score:", avgDolphinsBonus1);
console.log("Koalas average score:", avgKoalasBonus1);
console.log(determineWinner(avgDolphinsBonus1, avgKoalasBonus1));

console.log("\nTest Data Bonus 2:");
console.log("Dolphins average score:", avgDolphinsBonus2);
console.log("Koalas average score:", avgKoalasBonus2);
console.log(determineWinner(avgDolphinsBonus2, avgKoalasBonus2));