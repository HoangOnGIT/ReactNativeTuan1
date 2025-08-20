"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayCarInfo() {
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
}
