"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person = require("./Person");
const Student = require("./Student");
const Rectangle = require("./Rectangle");
const Dog = require("./Dog");
const s = new Student("Hoang", 12, 10);
const p = new Person("Ho", 20);
//Bai 1 + 2
s.displayAllInfo();
p.displayName();
//Bai 3 + 4
const r = new Rectangle(10, 12);
console.log("Area of r: " + r.calculateArea());
console.log("Perimeter of p: " + r.calculatePerimeter());
//Bai 7 + 8
const Product = require('./Product');
const products = [
    new Product("Laptop", 1200),
    new Product("Smartphone", 800),
    new Product("Tablet", 400),
    new Product("Monitor", 250),
    new Product("Keyboard", 50),
    new Product("Mouse", 30),
    new Product("Headphones", 100),
    new Product("Printer", 200),
    new Product("Webcam", 75),
    new Product("Router", 90)
];
console.log("Products with price gt than 100" + r.calculatePerimeter());
console.log(products.filter(product => product.price > 100));
// Bai 9 + Bai 11 
const d = new Dog("Kiki");
d.bark();
