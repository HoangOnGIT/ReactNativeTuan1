"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    name;
    sound;
    constructor(name) {
        this.sound = () => "gwar";
        this.name = name;
    }
    bark() {
        console.log(this.sound());
    }
}
module.exports = Dog;
