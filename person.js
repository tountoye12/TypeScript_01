"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age <= 0 || age > 200) {
                throw new Error("This age is invalid");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._first_Name;
        },
        set: function (firstname) {
            this._first_Name = firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._last_Name;
        },
        set: function (lastname) {
            this._last_Name = lastname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
