## Chapter 04.OPTIONAL: React + Redux + Module Bundling

# Lesson 1. IMPORTANT: Thinking Like A Senior Developer

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/35654813

# Lesson 2. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12613147

# Lesson 3. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12613154

# Lesson 4. Angular vs React vs Vue vs Svelte

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/49009536

- This libraries are tools!

**Angular**
<Props>

- Better work for a bank
- Like a entire kitchen with all the tools yuo need

<Cons>

**React**
<Props>

- Strong developer team and also needs to be flexible and evolve by adding new libraries
- Have some creative freedom

<Cons>

**Vue**
<Props>

- Friendly code, easy to pick up, hire many junios developers
- Like a microway, super simple, a lot less complicated than a oven

<Cons>

# Lesson 5. CWD: Introduction To React.js

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/49022053

# Lesson 6. CWD: Create React App

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/46096686

npx create-react-app [name of the app]

CLI:
npx create-react-app robofriends_init
cd robofriends_init
npm start

# Lesson 7. CWD: React App Folder Structure

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/35657685

<package-lock.json> secure that we can run this app anywhere in the world coz the packages abd depencies versions are lock

<.git> is a configuration file, automatically generated by react app

# Lesson 8. CWD: React 18 Update

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/42905842

- Libreries are constansly updating so my job is to be op top of my game, check de offitial docs.

In this example there is an update in React 18 so lower versions won't longer work. This is easy to solve if we know how to read the docs

# Lesson 9. CWD: React Fundamentals

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/35657684

- /public/index.html. This is th file where the whole app is served (bundle):

    <div id="root"></div>

- src/index.js. This is where all the file are bundle to be served in index.html:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

# Lesson 10. CWD: React Fundamentals 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/35657687

# Lesson 11. Hooks vs Classes

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/31923206

<Hooks> are a new feature and is specific for React while classes is common in for Javascript

- This course starts with classes and then convert into hooks which are super cool!

# Lesson 12. CWD: Class vs Functional App.js

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/35657686

- Before they use <class> and a <subclass> (extended) in App.js. Nowadays, Function is used. It simplier and cleaner

# Lesson 13. CWD: Your First React Component

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12613134

- JXS => Part of React is to allow to write this HTML like
- This idea break the rule of separation of concerns, but React logic is that everything is contain in the components (CSS linked to .js file with the same name)

# Lesson 14. CWD: Building A React App 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12613139

For the CSS is used: "tachyons": "^4.12.0",
It was not working after intalling coz I forgot to import it in index.js!

Here I had a bug. Stupid mistake:
I had this:
<Card id={robots.id[0]} name={robots.name[0]} email={robots.email[0]}/>
Instead of this
<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>

# Lesson 14. The Dirty Little Secret To Become An Expert

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/46096765

It is very important to read the documentation! They have a UI section, they have a blog...

# Lesson 15. CWD: Building A React App 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12613153

In this section explain the looping with high level function (map) and the importance of "key". key helps the DOM to identify if a element change without render the page again
