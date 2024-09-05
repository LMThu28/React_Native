// 1. Lớp CarCl sử dụng ES6 class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // Tốc độ tính bằng km/h
    }

    // Phương thức accelerate
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // Để hỗ trợ method chaining
    }

    // Phương thức brake
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // Để hỗ trợ method chaining
    }

    // Getter cho speed in miles per hour (mi/h)
    get speedUS() {
        return this.speed / 1.6;
    }

    // Setter cho speed in miles per hour (mi/h)
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// 2. Lớp con EVCl kế thừa từ CarCl
class EVCl extends CarCl {
    // Thuộc tính charge sẽ là private (sử dụng # để làm thuộc tính private)
    #
    charge;

    constructor(make, speed, charge) {
        super(make, speed); // Gọi constructor của CarCl
        this.#charge = charge; // Thuộc tính charge riêng tư
    }

    // Phương thức chargeBattery
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.#charge}%`);
        return this; // Để hỗ trợ method chaining
    }

    // Phương thức accelerate được override
    accelerate() {
        this.speed += 20;
        this.#charge--; // Giảm 1% pin
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this; // Để hỗ trợ method chaining
    }
}

// 3. Tạo đối tượng EVCl và thử nghiệm method chaining
const rivian = new EVCl('Rivian', 120, 23);

rivian
    .accelerate() // Tăng tốc
    .brake() // Giảm tốc độ
    .chargeBattery(90) // Sạc pin đến 90%
    .accelerate() // Tăng tốc thêm
    .brake(); // Giảm tốc độ