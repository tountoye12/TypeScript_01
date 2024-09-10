

import { Person } from "./person.js";

const person:Person =  new Person();

person.lastName = "diallo";
person.firstName = "Mamadou";

try {
    person.age = 45
} catch (error) {
    console.log(error.message());
}





console.log(person);
console.log(`First Name: ${person.firstName}`);