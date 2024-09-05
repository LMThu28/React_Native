// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study

function calAverageHumanAge(ages) {
    // 1. Chuyển đổi tuổi của chó thành tuổi của người
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges);
    // 2. Lọc ra những con chó có tuổi người lớn hơn hoặc bằng 18
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);
    // 3. Tính trung bình tuổi của những con chó đã lọc
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return average;
}

// Test data
const dogs = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calAverageHumanAge(dogs));
console.log(calAverageHumanAge(dogs2));