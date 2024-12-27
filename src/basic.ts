let message: string = "123"; // string type
const number: number = 123; // number type
const boolean: boolean = true; // boolean type
const array1: number[] = [1, 2, 3]; // array type
const object: { name: string; age: number } = { name: "John", age: 30 }; // object type

// message = 333; // error because message is a string


const numbers2: number[] = [1,2,3,4,5,6,7,8,9,10];
const names: string[] = ["John", "Jane", "Doe"];

const flags: boolean[] = [true, false, true];


enum Color {
    Red,
    Green,
    Blue,
    Purple,
    Orange,
    Yellow,
    Pink,
    Brown,
    Gray,
    Black,
    White
}

const color: Color = Color.Red;
console.log(color);

enum PaymentMethod {
    Bkash,
    Nagad,
    Rocket,
    Bank
}

const paymentMethod: PaymentMethod = PaymentMethod.Bkash;
console.log(paymentMethod);

