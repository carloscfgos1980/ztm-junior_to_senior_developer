# Chanpter 05.Performance Part 2

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676734

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676736

# Lesson 3. Optimizing Code

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676729

# Lesson 4. Code Splitting Introduction

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676725

# Lesson 5. Code Splitting Part 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676735

- Create React app
- VEry basic app. I copied the CSS from the example in ZTM exercise folder
- using if else to switch pages

# Lesson 6. Code Splitting Part 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676719

- This part is a pain in the ass... probably there is a different way to do it!

# Lesson 7. Code Splitting Part 3

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676727

- Create a async component to do it "cleaner"... i still I see very messy in a very simple app

# Lesson 8. Solution: React.lazy() Code Splitting

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676726

- Using React.lazy(). We can manage to load the page asynchronouesly. The page does not need to have all the elements for the bundler to "paint" the page.

- Still it looks a bit weird, it might speed up the page neverthless I don't think I will ever use it... this is a nerdy stuff!

# Lesson 9. React Performance Optimizations

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676737

- Back to Robotfriends app!

- Check app perfomance. Add "/?react_perf" to the home page, like this:
  http://localhost:3000/?react_perf

# Lesson 10. React Performance Optimizations 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676731

- I moved the input field function from App.js to SearchBox.js. By doing that, the app don't need to render all the elements when I make changes in the search box. It gets speed. This is only possible becasue Redux, with hooks, the "state" must be at the parent element (App.js). With Redux, the state lifes in the store and we can access it from any component
- I also moved the functions with the filtered array of robots into CardList.js from App.js. Like that I do "separation of business". App. shoould only take care of fetching and return the components

* In the tutorial the show a old version of React, using extended classes and render...

# Lesson 11. Optimizing Code Review

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676724

- Only load what it is needed: code splitting
- Avoid blocking main thread
- Avoid memory leak
- Avoid multiples re-rendering

# Lesson 12. Progressive Web Apps

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676730

<Native App> is NOT in the browser but inside a cellphone, real app in the phone. It does not require internet to work!
