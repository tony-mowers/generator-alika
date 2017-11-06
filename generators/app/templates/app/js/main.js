class Person {
    constructor(name='World') {
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}!`;
    }
}

const person = new Person();
const textNode = document.createTextNode(person.greet());
document.getElementById('main').appendChild(textNode);