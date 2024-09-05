// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h


// 1. Sử dụng hàm constructor để triển khai 'Car'
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// 2. Triển khai phương thức 'accelerate' để tăng tốc độ của xe
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3. Triển khai phương thức 'brake' để giảm tốc độ của xe
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Tạo 2 đối tượng 'Car' và thực hiện gọi phương thức 'accelerate' và 'brake' nhiều lần trên mỗi xe
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate(); // Tăng tốc độ xe BMW
car1.brake(); // Giảm tốc độ xe BMW
car1.accelerate();
car1.accelerate();

car2.accelerate(); // Tăng tốc độ xe Mercedes
car2.brake(); // Giảm tốc độ xe Mercedes
car2.brake();
car2.accelerate();