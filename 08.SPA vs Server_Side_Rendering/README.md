## SPA vs Server Side Rendering

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664272

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664281

- This section is about the comparison between SPA (Single Page Application) and erver Side Rendering.

SPA => the web is rendered on the client side and it uses a lot of havascript. It is "Single Page Application" coz it uses only one HTML file and it does not has to render everytime that a link is clicked!

# Lesson 3. CSR vs SSR

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664271

CSR => Client Side Rendering. The page takes more time to load so developer place a spinnign so the user do not get annoyed
SSR => Server Side Rendering. Better experience for the user, no black page, but it also need extra time to make the page interactive

# Lesson 4. Server Side Rendering React

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664269

SSR in React can get quite complicated and messy. There are a ton of articles online that show you how to implement it and you can read those on your own. However, in this course we are going to be learning about Next.js which we will cover shortly. In my opinion it is the preferred way to create a server side rendered app because just like create-react-app, it allows us to focus on the things that matter instead of worrying about configurations that always change and aren't important to your development as a programmer.

Stay with me, and I promise it will get more clear how to do SSR properly!

# Lesson 5. CSR vs SSR Part 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664280

CSR
props:

- Rich interaction
- Faster response
- Web applications

cons:

- low SEO potential
- Longer initial load

SSR
props:

- Static sites
- SEO: by the time it arrive to the client, it already has everything render. The content is presented before it actually get it in the view
- Initial page load

cons:

- Full page reload
- Slower page rendering
- Request to the server

# Lesson 6. SSR React Libraries

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664274

There are two main ways to do it:

- Gatsby.js
- Next.js: It is the easiest way

# Lesson 7. Static vs SSR vs CSR: Gatsby.js vs Next.js vs React.js

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/25051759

- Check <Static vs SSR vs CSR, Gatsby.js vs Next.js vs React> diagram

* We have to ask ourselve, where we want the heavy work to be done:

- React: Client side
- Next.js: Server side
- Gabsby: Developer computer

# Lesson 8. Setting Up Next.js

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12664283

npx create-next-app@latest

- pick the name of the app: nextjs-tutorial
  cd nextjs-tutorial
  npm run dev

- I am not following the tutorial coz is way to outdated, just reading the offitial docs

# EXTRA. Codevolution tutorial

# Lesson 1. Introduction

https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI

What is Nextjs?

React:

- It is not feseable to create a fully-featured application ready for production
- React is library for building user interfaces
- You need to make decitions about other features such as routing , data fetching and more

Nextjs:

- It is a React framework, it uses React to build user interfaces
- Provide additional features that enable you to build production-ready applications
- These features includes routing, optimized rendering, data fetching, bundling, compiling, and more
- You don't need to install additional packages as Nextjs provides everything you need
- Nextjs is a React framework to build production web application
- It simplifies the process of building a website application for production:

1. Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

# Lesson 2. Hello World

https://www.youtube.com/watch?v=kVddMV-TrSw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2
