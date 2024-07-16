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

# Lesson 11.
