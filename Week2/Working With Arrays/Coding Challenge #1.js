// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.


function checkDogs(dogsJulia, dogsKate) {
    // 1. Tạo bản sao nông của mảng Julia và loại bỏ độ tuổi của chó bị lỗi
    const correctedDogsJulia = dogsJulia.slice(); // Tạo bản sao nông
    correctedDogsJulia.splice(0, 2); // Loại bỏ hai con chó đầu tiên
    correctedDogsJulia.splice(-2); // Loại bỏ hai con chó cuối cùng

    // 2. Kết hợp dữ liệu của Julia (đã sửa) và Kate
    const allDogs = correctedDogsJulia.concat(dogsKate);

    // 3. Kiểm tra từng con chó và in ra kết quả
    allDogs.forEach((age, index) => {
        if (age >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${index + 1} is still a puppy 🐶`);
        }
    });
}

// Test data
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

// Chạy hàm kiểm tra với dữ liệu test
checkDogs(dogsJulia1, dogsKate1);
checkDogs(dogsJulia2, dogsKate2);