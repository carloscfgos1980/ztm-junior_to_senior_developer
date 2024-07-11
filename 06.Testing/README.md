## 06.Testing

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606620

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606599

# Lesson 3. Types of Tests

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606600

- Unit tests: small pieces of code (pure functions)
- Integration tests
- Automatization tests

# Lesson 4.Testing Libraries

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606597

# Lesson 5. Unit Tests

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606619

- Test pure functions
- It is deterministic: You can put the same input, million times and it will always returns the same output

# Lesson 6. Integration Tests

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606611

- Cross communication between different units of code
- Mocking a database call
- They are much harder to write than unit tests

# Lesson 7. Automation Testing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606601

- end to end tests
- UI tests
- They are always running inside a browser or a browser like environment (POSTMan, for example)
- This is the harder
- Check <Automitation testing> diagram
- Only big compaies thagt have the budget to spend on Automitation testing

# Lesson 8. Final Note On Testing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606605

- Tests are meant for development, you will never are gonna ship the tests libraries into production
- Check <testing-cycle> diagram

# Lesson 9. Setting Up Jest

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/24934453

- React comes with Jest npm package

- Jest website:
  https://jestjs.io

- Start a porject:
  mkdir test
  cd test
  npm init -y

- Install Jest:
  npm install --save-dev jest

- Set test script to run jest:
  "test": "jest"

- Example in test directory:
  An array of google websites and a search function that filter the array to search if it includes a certain word.
  Ternary operator is used to make sure the ooutput is not larger than 3
- To run the script, we use node.js:
  node script.js

# Lesson 10. Our First Tests

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606608

- for Jest to work we need to have a test written in **test** directory, or files .test.js or spec.js. For this example we created file script.test.js:

- Test that get and empty array in case the argument given (parameter) is not in the mock database
- test that return to matches website
- test that an empty array when the arguent ins undefined or null
- test to check that the length of the output is equal 3
