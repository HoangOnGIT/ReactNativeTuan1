"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person = require("./Person");
const Student = require("./Student");
const Rectangle = require("./Rectangle");
const s = new Student("Hoang", 12, 10);
const p = new Person("Ho", 20);
//Bai 1 + 2
s.displayAllInfo();
p.displayName();
//Bai 3 + 4
const r = new Rectangle(10, 12);
console.log("Area of r: " + r.calculateArea());
