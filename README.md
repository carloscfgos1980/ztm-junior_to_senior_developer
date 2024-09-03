# Chapter 02. SSH

- Introduction to SSH
- SSH Command
- How SSH Works: Symmetric Encryption, Asymmetric Encryption, Hashing
- SSH Into A Server. Connecting with Digital Ocean
- Set Up SSH on Github

# Chapter 03. Performance1

- 3 Keys To Performance: frontend, network latency (transfers files), backend
- Network Performance
- Image Optimizations
- Network Optimizations. Exercise
- Critical Render Path
- Keiko Corp Website. Exercise

# Chapter 04.OPTIONAL: React + Redux + Module Bundling

- Angular vs React vs Vue vs Svelte
- React classes
- React hooks
- React redux
- bundlers (webpack and parcel)

# Chapter 05.Performance_Part_2

- Optimize the performance of the app: size of image, split coding (I was already using this, the Redux I don't need to clug App.js, the state is changed in the store and it is run in the business component)
- PWA = > Progressive Web App. This allows the app to work offline. I need to learn yet how to deploy as a native app in a phone thru App store!
- I learned how to use "lighthouse" chrome extension to improve perfomance
- how to deploy a static app in github
- React.Lazy() optimize the app by loading the page asynchronously, so it does not need to have all the elements to upload... still I not very convinced... it add boiler plate

# Chapter 06.Testing

- Types of Tests:

1. Unit Tests
2. Integration Tests
3. Automation Testing

- Jest
- Jest. Unit test: Synchronous Tests
- Jest. Unit test: Asynchronous Tests
- Jest. Mock (this is painful to get it right!)
- Enzyme. It is a library to test React components. I skipped the whole topic

# Chapter 07.TypeScript

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

* Until here it was useful the course, I had to look in the docs in order to make the app work with typescript. It took nearly 10 hours!

I have created 3 apps so far:

- my-app (just start up redux typescript app)
- shoppingcart-nd-personList-app (tutorial redux typescript)
- robofriends-app (upgrading robotsfriend app from redux to typescript redux including testing)
- davy_gray-tutorial: React-hooks app, using form and re usuable components. This is one I didn't follow the tutorial, instead I finished reading the offitial Docs.
- David-Gray-full_course. This is I have not followed, maybe in the future I will. It is from 2022

# Chapter 08.SPA vs Server_Side_Rendering

- CSR vs SSR: Comparison of Client Side Rendering vs Server Side Rendering
- Server Side Rendering React
- SSR React Libraries: Gatsby.js and Next.js
- Next.js apps
- Deploying Next.js Apps
- Codevolution tutorial Next.js tutorial (very good)

# Chapter 09.Security

- Lesson # 3 provide a diagram with the main issues for security
- Injections is on of the most dangerous way of hackers attack
- 3rd Party Libraries: audit the npm packahes
- Logging: logging middleware like morgans
- HTTPS Everywhere: host our website in a trusted site
- XSS + CSRF: Example of hackers attack
- Secure Headers: helmet middleware
- Access Control: CORS middleware
- Authentication

# Chapter 10. Code Analysis

- This is fundamental for a senior developer. Work on an app that has already been built. It ismportant to not act like as a smart-ass and critize everything!
- full stack app: brain-smart fork from ZTM web develper course
- Update the app with my data about postgress and carifai API key
- Update client side in order to transform single face recognition to multi faces recognition
- I also have a version of smart-brain in Next.js that someone made

# Chapter 11. Docker

- Docker Containers
- Installing Docker
- Docker Commands
- Docker Compose
- CMD for docker composer
- Setting for postgres database in containe
- Add tables to postgres database
- Add data to the tables in postgres database

# Chapter 12. Redis

- Database for small data, very popular with sessions
- Installing Redis
- Redis Commands
- Redis Data Types: Strings, hashes, lists, sets
- Redis Hashes
- Redis Lists
  Redis Sets + Sorted Sets

# Chapter 13.Sessions + JWT

- Cookies vs Tokens
- JWT
- Profile Icon (avatar img)
- Profile Dropdown (reactstrap component)
- Profile Modal (reactstrap component)
- Updating Profile. backend (update postgres)
- Updating Profile. frontend (function using "swithc" for the form)
- User Authentication. backend
- Sending The JWT Token
- Adding Redis. backend
- Adding Redis To Docker Compose
- Storing JWT Tokens
- Retrieving Auth Token. backend
- Client Session Management(window.sessionStorage)
- Session Sign In
- Authorization Middleware. server
- MAIN COMPONENTS: docker, postgres, redis, JWT, middleare, modal
