function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.speed} KM/H than mercedes`);
    }
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Maruti Alto", 80);
car3 = new GeneralCar("Mercedes", 200);

console.log(car1, car2, car3);