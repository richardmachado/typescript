let arrayString = ['a', 'b', 'c']

let arrayNumner = [1, 2, 3]

let arrayBool = [false, true]

arrayBool[0] = true
arrayBool.push(false)

let arrayMix: (string | number | boolean)[]= [1, "a", true];

arrayMix[0] = "hi"

let arrayTuple: [string, number] = ['a string', 5]

arrayTuple = ["a", 2]

let person = {
    name: "Jesse",
    age:45
}

person.name = "John"
person.age = 54

type stringOrNum = string | number;
let year: stringOrNum
year = 2932
year = "2021"

function calcSum(a:number, b:number) {
    return a+b
}
calcSum(2, 3)

// arrow function
let caclcSum: (a: number, b: number, c:number) => number;

caclcSum = (first: number, second: number) => {
    return first + second;
}
caclcSum(2, 3, 3)

// void
const sayHi = () => {
    console.log('Hi')
}
// interface
interface PersonInterface {
    name: string;
    age: number;
}

let mike:PersonInterface = {
    name: "mike",
    age:24
}

class Person implements PersonInterface {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}
