// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Tính lượng thức ăn khuyến nghị cho mỗi con chó
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));

// 2. Tìm chủ sở hữu của con chó ăn quá nhiều
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

// 3. Tìm chủ sở hữu của con chó ăn quá ít
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);

// 4. In ra cốnle chuỗi cho mỗi mảng được tạo ở bước 3
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Kiểm tra xem có con chó nào ăn lượng thức ăn đề xuất không
console.log(dogs.some(dog => dog.curFood == dog.recFood));

// 6. Kiểm tra xem có con chó nào ăn lượng thức ăn "oke" không
const checkEatingOke = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOke));

// 7. tao mảng chứa các con chó ăn lượng thức ăn "oke"
const dogsEatingOke = dogs.filter(checkEatingOke);
console.log(dogsEatingOke);

// 8. Tao ban sao cua mang dogs va sap xep no theo luong thuc an duoc khuyen nghi
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);