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

https://create-react-app.dev/docs/making-a-progressive-web-app/

- It has 3 main parts:

1. HTTPS
2. App Manifest
3. Service worker

- Check <PWA> diagram

<PWA> => Progressive Web Apps

# Lesson 13. Progressive Web Apps Examples

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676733

# Lesson 14. PWA - HTTPS

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676720

- PWA Check List:
  https://developers.google.com/web/progressive-web-apps/checklist

# Lesson 15. PWA - App Manifest

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676722

- There is a line code that is essential for <pwa>. public/index.html

    <meta name="viewport" content="width=device-width, initial-scale=1" />

- App Manifest lays in public/manifest.json. It comes out the box from React!

- Create a icon:
  https://realfavicongenerator.net

# Lesson 16. PWA - Service Workers

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676718

- Check <serviceWorker> diagram

# Lesson 17. PWA - Final Thoughts

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676739

- Safari works very slow with PWA because it is not in the best interest of Appel
- Pushing notification and fetch data could not work in some browsers
- Luckly most of the browser suppor PWA app!

# Lesson 18. Deploying Our React App

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676728

1. Update the repository
   git add .
   git commit -m "lalalala"
   git push origin master

2. packages to serve the web in GitHub:
   npm install gh-pages

3. Write the deploy script in package.json:

"predeploy": "npm run build",
"deploy": "gh-pages -d build"

4. Create HomePage property in package.json. Everything is in the documentation:

"homepage": "https://github.com/carloscfgos1980/PWA-Robot_friends",

I need to go to GitHub, then to the repository for this app, the setting and then Pages... it took some time before it was online!... and I was wrong! I that the script from the homepage wrongly written, it should be with this format:
"homepage": https://[username].github.io/[repository name],

"homepage": "https://carloscfgos1980.github.io/PWA-Robot_friends",

5. Script to run the command:
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"

6. Run the command in the terminal:
   npm run deploy

- If I get a message as published.... tada.. it's done:
  https://carloscfgos1980.github.io/PWA-Robot_friends/

* this lesson is a bit outdated!

# Lesson 19. Service Worker Update

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12814418

service worker is not longer created by default in React. Here is the explanation:
https://github.com/facebook/create-react-app/issues/2396

# Lesson 20. Solution Part 1 - PWA

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676717

- Add lighthouse extension to Chrome so I can analize my app!... done!

This part is about optimizing the images and CSS depending on the report from "lighthouse"

# Lesson 21. Solution Part 2 - PWA

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12676723

- Website to generate favicon:
  https://realfavicongenerator.net

1. Get a image that I will use as icon
2. Load in the page above
3. Download the package and copy into public directory
4. copy the code into public/index.html:
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
5. adjust icon size in public/manifest.json
   5.1 Update the name:
   "short_name": "Robofriends",
   "name": "Robofriends React App",
   5.2 Update the icos size:
   {
   "src": "favicon.ico",
   "sizes": "64x64 32x32 24x24 16x16",
   "type": "image/x-icon"
   },
   {
   "src": "android-chrome-192x192.png",
   "type": "image/png",
   "sizes": "192x192"
   },
   {
   "src": "android-chrome-256x256.png",
   "type": "image/png",
   "sizes": "512x512"
   }

**Estra**

- this resource to finish off this section. It is a website that lists all tools that you can use to improve front end performance of your web app:

https://progressivetooling.com

Last update is this app:
Center-For-Robotos-Who-Cant-Be-In-The-App-Store-And-Wanna-Learn-To-Do-Other-Stuff-Good-Too-update-master

# Lesson 22. Deploying your PWA to the App Store

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/46441141

If you ever build a PWA that you actually want to deploy to the Apple App Store, you can now do it! Check out the guide here.
https://web.dev/articles/pwas-in-app-stores

# Conclusions:

- Optimize the performance of the app: size of image, split coding (I was already using this, the Redux I don't need to clug App.js, the state is changed in the store and it is run in the business component)
- PWA = > Progressive Web App. This allows the app to work offline. I need to learn yet how to deploy as a native app in a phone thru App store!
- I learned how to use "lighthouse" chrome extension to improve perfomance
- how to deploy a static app in github
- React.Lazy() optimize the app by loading the page asynchronously, so it does not need to have all the elements to upload... still I not very convinced... it add boiler plate
