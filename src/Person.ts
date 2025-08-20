class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayName() {
        console.log(this.name)
    }

}

module.exports =   Person;