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

- The example is a bit outdated, they use "it", now is used "test"
- Also the script the uset it was not working, it is decapricated:
  test: "jest --watch \*.js"

- Instead I just used:
  test: "jest"

# Lesson 11. Asynchronous Tests

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606618

**Testing API**:
http://swapi.py4e.com/api/people/
http://swapi.py4e.com
https://swapi.dev
http://numbersapi.com/#42
https://api.chucknorris.io

I did not follow the exercise example coz it's a bit outdated, instead I used async await try catch (script2.js)

# Lesson 12. Asynchronous Tests 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606613

It took me almost 1 hour to figure this out. When I try to use the asynchronous function, I got undefined... so I google it and this is the best practice

describe('fetching Star War Data', () => {
test('call swapi to get people', () => {
return fetchData(STAR_WAR_API).then(data => {
expect(data.count).toBe(87);
});
});
})

# Lesson 13. Mocks and Spies

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606607

This took me a lot of time to fig it out coz the lesson is outdated and the dos in Jets shows an example where the mocked object is wrapped with [], becasue of that I was getting undefined. It is how is show on the docs... more indo in <script2.js>

- first function: Fetching without axios. Try and Catch
- second function: Fetching with axios. Try and Catch

# Lesson 14. Introduction To Enzyme

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606614

<Enzyme> is a library to test React components

https://enzymejs.github.io/enzyme/docs/api/

# Lesson 14. Snapshot Testing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606603

# Lesson 15. Snapshot Testing + Code Coverage

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606606

# Lesson 16. Testing Stateful Components

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606617

# Lesson 17. Testing Connected Components

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606609

# Lesson 18. Testing Connected Components 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606616

# Lesson 19. Testing Reducers

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606612

# Lesson 20. Testing Actions

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606604

# Lesson 21. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12606615

# Conclusion

- Types of Tests:

1. Unit Tests
2. Integration Tests
3. Automation Testing

- Jest
- Jest. Unit test: Synchronous Tests
- Jest. Unit test: Asynchronous Tests
- Jest. Mock (this is painful to get it right!)
- Enzyme. It is a library to test React components. I skipped the whole topic!
