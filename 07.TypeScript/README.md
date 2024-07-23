# Chapter 07.TypeScript

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647645

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647653

- <Typescript> makes <Javascript> which is a dynamic language into a static language

# Lesson 3. Dynamic vs Static Typing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647655

- Check <programing language> diagram
- Static type languague, we have to declare the variable (integer, string, object, etc)

**Static**

- Props:

1. We get documentation.
2. Avoid bugs

- Cons:

1. It is more complex, more codes than <dynamic> languages
2. It takes more time to learn
3. Slower development process

- Writing good unit test also avoind bugs

# Lesson 4. Weakly vs Strongly Typed

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647649

Javascript allows you to add a string variable to a number variable, which could produce a bug. That is why is "weak" and "dynamic". This can not be done with Python, it will throw an error

# Lesson 5. Static Typing in Javascript

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647658

- Check <static typing javascript> diagram

# Lesson 6. Typescript Compiler

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/49009873

Typescrip websiteÑ
https://www.typescriptlang.org

- We need Node.js to work with Typescript

- Install typescript globally
  npm intall -g typescript

# Lesson 6. TypeScript. Introduction

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/13139815

1. Create a project for Typescript
   mkdir type
   cd type
   touch typescript.ts

2. write simple function:
   function sum(a , b){
   return a + b
   }

3. Run typescript:
   tsc typescript.ts

- This will create a javascript file with the same name and content

4. Run the function that is spelled out in typescript.js
   node typescript.js

- Here I had a bug coz I was trying to run tupescript.ts

5. Try typescript. give a parameter that is not a number as it was declared:
   const answer = myAdd('hello', 9);

I run tsc typescript and I get this nice loc error:
typescript.ts:9:22 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

# Lesson 6. TypeScript 2. Init

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647654

- Start typescrip project:
  tsc --init

- typescrip in watch mode
  tsc typescrip.ts --watch

# Lesson 7. TypeScript 3. Types of variables I

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647660

# Lesson 8. TypeScript 4. Types of variables II

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647651

This variable does not exist in Javascropt neverthless Typescript can compile it. Look at variableTypes.js

- Tuple
- Enum

# Lesson 9. TypeScript 5. Types of variables III. Any, Void, Never

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647662

# Lesson 10. TypeScript 6. Interface

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647644

# Lesson 11.TypeScript 7. Assertion

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647650

- This is a dangerous feature so we have to be extra carefull if we use it

# Lesson 12. TypeScript 8. Functions and classes

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647652

- Explanation of "void" using in funtion
- explanation of private property using in a class

This is the message I got when trying to access a private property:
variableTypes.ts:97:6 - error TS2341: Property 'sing' is private and only accessible within class 'Animal'.

# Lesson 13. TypeScript 9. union

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647646

Union. This give to the variable more than one "type"

# Lesson 14. TypeScript 10. Infer the type

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647646

TypeScript infer the type. One a variable has been created as a number, it is not possible to give a different value with a different type without even specified that is a a number:

let x = 4;
x = 'hello';

variableTypes.ts:101:1 - error TS2322: Type 'string' is not assignable to type 'number'.

101 x = 'hello';

# Lesson 15. DefinitelyTyped

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647647

- Website to convert files into TypesScript:
  https://github.com/DefinitelyTyped

# Lesson 16. Update: Create React App with TypeScript

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/13137839

- Documentation:
  https://create-react-app.dev/docs/adding-typescript/

npx create-react-app my-app --typescript

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# Lesson 17. Just Watch [Old Way] - TypeScript In Robofriends

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647659

# Lesson 18. Just Watch [Old Way] - TypeScript In Robofriends 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12647648

# Lesson 19. Starting our Typing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/43073565

1. Copy robofriends app
2. cd robofriends_type
3. install dependencies for Typescript:
   npm install --save typescript @types/node @types/react @types/react-dom @types/jest

4. Create tsconfig.json and copy the code given

# Lesson 20. Typescript Interfaces

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/43073450

# Lesson 21. Typescript Types & Third Party Library Types

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/43073448

OOP => uses Interfases
FP => uses types

# Lesson 22. ChangeEvent Type From React

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/43073698

# Lesson 23. Understanding Generics

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/43073721

# Lesson 24. Typing React's setState

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/43073750

# Conclusion:

- Type is a pain in the ass! It should be used in simple apps, neverthless many company use this so it es very handy to master it. I will take a coule typescript tutorial before moving forward
- Topics:
- Dynamic vs Static Typing
- Weakly vs Strongly Typed
- Static typing in javascript (typescripte)
- TypeScript. Types of variables
- TypeScript. Interface, also type but not really in this course
- TypeScript. Assertion
- TypeScript. Assertion
- TypeScript. Functions and classes
- TypeScript. Union (variable with more than one type)
- Create React App with TypeScript

* Until it was useful the course, I had to look in the docs in order to make the app work with typescript. It took nearly 10 hours!
