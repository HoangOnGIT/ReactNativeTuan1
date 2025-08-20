import type { Animal } from "./Animal";

class Dog implements Animal {
    name: string
    sound: () => string

    constructor(name: string){
        this.sound = () => "gwar"
        this.name = name;
    }

    bark() {
        console.log(this.sound())
    }

}

module.exports = Dog