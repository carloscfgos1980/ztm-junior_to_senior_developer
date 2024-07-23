//Types of variables
//TypeScript 3. Types of variables I
//Boolena
var isCool = true;
// Number
var myNum = 6;
// String
var myName = 'Carlos';
var yoyo = "My name is ".concat(myName, " and my number is ").concat(myNum);
// Array of strings
var pet = ['cat', 'dog', 'bird'];
var pet2 = ['cat', 'dog', 'bird'];
// Object
var wizard = {
    name: 'John'
};
// TypeScript 4. Types of variables II
// Null and Undefined
var meh = undefined;
var nooh = null;
//TypeScript 5. Types of variables III. Any, Void, Never
//Tuple. It is array with different types of variables. It has a specific type and order
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Medium;
// Lesson 5. Any... Be careful to use this!
var whatever = 'oohhhh noooooo';
whatever = 5;
whatever = true;
// Void. This does not allow to return any thing
var sing = function () {
    console.log('lalalalaa');
    // return laala
};
var fightRobotArmy = function (robots) {
    console.log('Fight!');
};
fightRobotArmy({ count: 1, type: 'dragon' }); // I can pass just to arguments coz ther third is write as possible (magic?: )
var dog = {};
console.log(dog.count);
// TypeScript 8. Functions and classes
var fightRobotArmy2 = function (robots) {
    console.log('Fight!');
};
// Lesson 8. Function. Number because it does return a number
var fightRobotArmy3 = function (robots) {
    console.log('Fight!');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalala'; // this property can not longer be accessed coz it is labelled as private
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('Raaaahhhh');
// lion.sing
// TypeScript 9. Union. This give to the variable more than one "type"
var confused = 'Hello';
//TypeScript 10. Infer the type
// let x = 4;
// x = 'hello';
