// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h


// 1. Tạo lại Challenge #1 bằng ES6 class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // tốc độ tính bằng km/h
    }

    // Phương thức tăng tốc
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // Phương thức phanh
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // 2. Thêm getter 'speedUS' để trả về tốc độ tính bằng mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // 3. Thêm setter 'speedUS' để thiết lập tốc độ tính bằng mi/h
    set speedUS(speed) {
        this.speed = speed * 1.6; // Chuyển đổi từ mi/h sang km/h
    }
}

// 4. Tạo một chiếc xe mới và thử nghiệm các phương thức và getter, setter
const car1 = new CarCl('Ford', 120);

car1.accelerate(); // Tăng tốc độ lên 130 km/h
car1.brake(); // Giảm tốc độ xuống 125 km/h

console.log(`${car1.make}'s speed in mi/h: ${car1.speedUS}`); // Trả về tốc độ tính bằng mi/h

car1.speedUS = 50; // Thiết lập tốc độ thành 50 mi/h
console.log(`${car1.make}'s speed in km/h: ${car1.speed}`); // Hiển thị tốc độ tính bằng km/h sau khi chuyển đổi