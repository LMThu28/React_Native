// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!

const calcAverageHumanAge = (ages) =>
    ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) // Chuyển đổi tuổi chó sang tuổi người
    .filter(humanAge => humanAge >= 18) // Loại bỏ những con dưới 18 tuổi người
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // Tính tuổi trung bình

// Test data
const dogs = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

// Chạy hàm tính toán với dữ liệu test
console.log(calcAverageHumanAge(dogs)); // Kết quả trung bình tuổi người cho data1
console.log(calcAverageHumanAge(dogs2)); // Kết quả trung bình tuổi người cho data2