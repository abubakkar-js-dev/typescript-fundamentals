"use strict";
let message = "123"; // string type
const number = 123; // number type
const boolean = true; // boolean type
const array1 = [1, 2, 3]; // array type
const object = { name: "John", age: 30 }; // object type
// message = 333; // error because message is a string
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["John", "Jane", "Doe"];
const flags = [true, false, true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
    Color[Color["Orange"] = 4] = "Orange";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Pink"] = 6] = "Pink";
    Color[Color["Brown"] = 7] = "Brown";
    Color[Color["Gray"] = 8] = "Gray";
    Color[Color["Black"] = 9] = "Black";
    Color[Color["White"] = 10] = "White";
})(Color || (Color = {}));
const color = Color.Red;
console.log(color);
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["Bkash"] = 0] = "Bkash";
    PaymentMethod[PaymentMethod["Nagad"] = 1] = "Nagad";
    PaymentMethod[PaymentMethod["Rocket"] = 2] = "Rocket";
    PaymentMethod[PaymentMethod["Bank"] = 3] = "Bank";
})(PaymentMethod || (PaymentMethod = {}));
const paymentMethod = PaymentMethod.Bkash;
console.log(paymentMethod);
//# sourceMappingURL=basic.js.map