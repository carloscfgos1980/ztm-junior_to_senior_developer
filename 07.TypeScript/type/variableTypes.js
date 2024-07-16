//Types of variables I
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
// Null and Undefined
var meh = undefined;
var nooh = null;
//Types of variables II
// Tuple. It is array with different types of variables. It has a specific type and order
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
// Types of variables III
// Any... Be careful to use this!
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
