//Types of variables I

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

// Null and Undefined
let meh:undefined = undefined;
let nooh:null = null;

//Types of variables II

// Tuple. It is array with different types of variables. It has a specific type and order
let basket: [string, number];
basket = ['basketball', 5]

//Enum
enum Size {Small = 1, Medium =2, Large = 3}
let sizeName:number = Size.Medium

// Types of variables III

// Any... Be careful to use this!
let whatever:any = 'oohhhh noooooo';
whatever = 5;
whatever = true;

// Void. This does not allow to return any thing
let sing = ():void => {
    console.log('lalalalaa')
    // return laala
}

//Interfase
interface robotArmy {
    count:number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: robotArmy) => {
    console.log('Fight!')
}

