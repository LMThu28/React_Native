// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �

// 1. Constructor function cho Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed; // Tốc độ tính bằng km/h
}

// Phương thức accelerate của Car
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Phương thức brake của Car
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 1. Constructor function cho EV (Electric Vehicle), lớp con của Car
function EV(make, speed, charge) {
    // Kế thừa thuộc tính make và speed từ Car
    Car.call(this, make, speed);
    this.charge = charge; // Charge tính bằng %
}

// Kế thừa phương thức từ Car
EV.prototype = Object.create(Car.prototype);

// 2. Phương thức chargeBattery
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
};

// 3. Override phương thức accelerate
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--; // Giảm 1% pin
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// 4. Tạo một chiếc xe điện và thử nghiệm các phương thức
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate(); // Tăng tốc độ lên 140 km/h, pin giảm còn 22%
tesla.brake(); // Giảm tốc độ xuống 135 km/h
tesla.chargeBattery(90); // Sạc pin lên 90%
tesla.accelerate(); // Tăng tốc độ lên 155 km/h, pin giảm còn 89%