"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_js_1 = require("./person.js");
var person = new person_js_1.Person();
person.lastName = "diallo";
person.firstName = "Mamadou";
try {
    person.age = 45;
}
catch (error) {
    console.log(error.message());
}
console.log(person);
console.log("First Name: ".concat(person.firstName));
