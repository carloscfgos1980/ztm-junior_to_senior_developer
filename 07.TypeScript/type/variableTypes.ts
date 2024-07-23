//Types of variables
//TypeScript 3. Types of variables I

//Boolena
const isCool: boolean = true;

// Number
const myNum: number = 6;

// String
const myName: string = 'Carlos';
const yoyo: string = `My name is ${myName} and my number is ${myNum}`;

// Array of strings
let pet:string[] = ['cat', 'dog', 'bird'];
let pet2: Array<string> = ['cat', 'dog', 'bird'];

// Object
let wizard:object = {
    name: 'John'
}
// TypeScript 4. Types of variables II
// Null and Undefined
let meh:undefined = undefined;
let nooh:null = null;

//TypeScript 5. Types of variables III. Any, Void, Never
//Tuple. It is array with different types of variables. It has a specific type and order
let basket: [string, number];
basket = ['basketball', 5]

//Enum
enum Size {Small = 1, Medium =2, Large = 3}
let sizeName:number = Size.Medium

// Lesson 5. Any... Be careful to use this!
let whatever:any = 'oohhhh noooooo';
whatever = 5;
whatever = true;

// Void. This does not allow to return any thing
let sing = ():void => {
    console.log('lalalalaa')
    // return laala
}

//TypeScript 6. Interface
interface robotArmy {
    count:number,
    type: string,
    magic?: string // it means that this state is not required
}

let fightRobotArmy = (robots: robotArmy) => {
    console.log('Fight!')
}

fightRobotArmy({count:1, type: 'dragon'}) // I can pass just to arguments coz ther third is write as possible (magic?: )

//TypeScript 7. Assertion
interface catArmy {
    count:number,
    type: string,
    magic: string
}

let dog = {} as catArmy;
console.log(dog.count);

// TypeScript 8. Functions and classes
let fightRobotArmy2 = (robots: robotArmy): void => { //Void because it does not return anything
    console.log('Fight!')
}

// Lesson 8. Function. Number because it does return a number
let fightRobotArmy3 = (robots: {count:number, type: string, magic: string}): number => {
    console.log('Fight!')
    return 5
}


// Classes
class Animal {
    private sing: string = 'lalalalala' // this property can not longer be accessed coz it is labelled as private
    constructor (sound:string) {
        this.sing = sound;
    }
    greet():string {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('Raaaahhhh')

// lion.sing


// TypeScript 9. Union. This give to the variable more than one "type"
let confused: string | number = 'Hello'

//TypeScript 10. Infer the type
// let x = 4;
// x = 'hello';