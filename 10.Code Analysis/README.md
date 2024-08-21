## Chapter 10. Code Analysis

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12679530

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12679529

HEADS UP! In the next video you will see the smartBrain app in action!

Sometimes the Clarifai API models we use in the code base can be down or not working as they are constantly getting updated. A good way to check if the model you are using is up, is to check them on the Clarifai website. For example, for the Face Detect Mode: https://www.clarifai.com/models/face-detection. If that isn't working, then that means you will have to wait until their servers are back up.

Another update that has happened to the API since I recorded the video is to use a different format for the predict function. So compared to what you might see in the next video you might have to enter the above key:

so you would change from in the video:

.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)

To:

.predict('face-detection', req.body.input)

You will see when you get there in the next couple of lectures :)

If you really get stuck and want to learn how the app works, I recommend you watch the videos from the Complete Web Developer course:

Start at this video and watch until the end of that course section (FINAL PROJECT: SmartBrain Front-End): https://academy.zerotomastery.io/courses/complete-web-developer-zero-tomastery/lectures/46015621

# Lesson 3. Setting Up Your Environment

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12679532

- Check <brain-smart-app/README.md>
  brain-smart-app is a full stack app
  client: React
  server: Nodejs-Express.js

  features:

  - register and save the data in a local postgres database
  - login checking data from the database
  - form with input field for the image address
  - face recognition implemented for clarifai website
  - the initial app had had to make some changes:

  1. Create a database in postgres
  2. Set the proper settings to connect with my local postgres database (server)
  3. Create an account in clarifai and get a API key
  4. Set the API key in .env (server)

# Lesson 4. How To Analyze Code

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12679535

<knex> allows us to us to make SQL statements to the database (postgres)

- This is the method how to get acquanitance with a project that is already built by others. Always start for the high level functions and bit by bit, get to understand the business logic

# Lesson 5. Solution: #3 - Multiple Face Detection

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12679534

Multifaces recognition instead of just one. Explantion in the README at the root of the app

**Note**
In brain-smart repository there are two branches:
master => single face recognition
multifaces => multiface recognition
