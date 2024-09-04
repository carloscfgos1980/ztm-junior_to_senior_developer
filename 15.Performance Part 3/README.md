## Chapter 15.Performance Part 3

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681458

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681457

# Lesson 3. CDNs

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681460

CDN => Content Delivery Network

**Main CDN:**

- Amazon
- Cloedfare
- Microsoft Azure

# Lesson 4. GZIP

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681455

Compress all the file we sent to the client with GZIP. The browser has by default the feature to handle compressed folders (GZIP)

# Lesson 5. Database Scaling

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681465

1. Identify inefficient queries
2. Increase memory
3. Vertical scaling (Redis, Menchached)
4. Sharding
5. More databases
6. Database type

# Lesson 6. Caching 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681454

<Caching> is the process of storing some data in the catch
Catch is a component storing where the data is stored in the future, data can be served faster

- Check <caching> diagram

- Nowadays <CPUs> can store small amoung of data, this is a data that can be accessed really fast.
- The <RAM> (Ramdom Access Memoery) also allows us to store data in memory and it is quite fast as well but is the computer goes off, this data is lost
- <HDs> is the the most common place to store data, it is more secure but is also takes mroe time to access this data

- Check <cashing2> diagram

# Lesson 7. Caching 2. Robofriends

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681461

- Default features in the client (browser)
  Create app bundle technic
  Servise worker

# Lesson 8. Caching 3. caching3

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681463

- Check <caching3> diagram

There is this example use a very basic app: caching3

1. npm init
2. npm install express
3. npm install cors
4. Create server.js
5. package.json => Change the script from index.js to server.js
6. serer.js => Scriptt:

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use('/static', express.static(path.join(\_\_dirname, public), {'maxAge': '2h'}));

app.get('/hi', (res, res) => {
res.header('Cache-Control', 'public, max-age=86400')
res.header('Content-Type', 'text-html')
res.send(new Buffer('<h2>Test String</h2>'))
})

app.listen(3001, () => console.log('Example app listenning on port 3001!'))

7. One way to server a static app(public) and set a max age for the cache in the client (browser):

app.use('/static', express.static(path.join(\_\_dirname, public), {'maxAge': '2h'}));

8. Same way to server a client. This thime we sent a text in the http:

app.get('/hi', (res, res) => {
res.header('Cache-Control', 'public, max-age=86400')
res.header('Content-Type', 'text-html')
res.send(new Buffer('<h2>Test String</h2>'))
})

9. Basic html index file storage in "public" folder:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cache</title>
</head>
<body>
    <h1>Cach me babe more more time!</h1>
</body>
</html>

# Lesson 9. Resources: Caching

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/13220199

To learn more about how caching works and the two headers we discussed in the previous videos: Etag and Cache Control, I recommend you read further using these resources:

**Caching Everywhere**
https://www.freecodecamp.org/news/the-hidden-components-of-web-caching-970854fe2c49

**Cache Headers**
https://web.dev/articles/http-cache

**Caching and Performance**
https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers

# Lesson 10. Load Balancing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681462

- Check <load balancing1> diagram
- Check <load balancing2> diagram

* Load balancing is very useful is we have a lot of user, otherwise it should be use coz it adds complexity to our code

# Lesson 11. Nginx 1. load-balancer-exercise-master

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681464

- Digital Ocean and Amazon offer load balancing as a service so no code is needed!

load-balancer-exercise-master does not use express, instead a native Nodejs to build a basic server

- By the way, if you don't want to set up your own servers and you want to just play with NGINX configuration while watching the next couple of videos, you can use this online
  https://nginx-playground.wizardzines.com

# Lesson 12. Nginx 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681456

# Lesson 13. Resources: Nginx

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/13219973

To learn more about the NGINX config file have a look at:  
https://nginx.org/en/docs/

and
https://www.linode.com/docs/web-servers/nginx/how-to-configure-nginx/

# Lesson 14. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681459

- Check <optimize performance> diagram
- Check <course summary> diagram
- Check <app architecture> diagram: fullstack smart-brain app

1. Create a SPA (Single Page Application) using React, we served HTML, CSS and JS files
2. Use AWS Lambda to use simple taks for us. (This feature I didn't implemented coz it's something that can be done just with a React component and it's free!)
3. Use a Nodejs (with Express library) to talk to claifai API (face recognition)
4. Use "postgres" to manage data of users and login information
5. Use "redis" for fast memmory storage, to manage our sessions and make sure we have protected routes and make sure that only authenticated users can have access to private information
6. Learn how to add docker container to the entire system
7. We learned how to SSH into these services so we can debug it and check ut theri logs

- Check <load balancing3> diagram: fullstack smart-brain app
  ~ Scale our up as it grows to millions of users
  ~ To have functions running in containers in Amazon (AWS Lambda) so it is less weight for the server to handle
  ~ <load balancing> to have multiples API servers to manage all the requets that users might have
  ~ Run the servers in docker containers so we can just deploy them and replicate them in any hosted machine
  ~ We can improve our databases by having cached information in "redis" or perhaps duplicating databases so we have more power
  ~ multiple redis instances to manage our data to store session information or some cached information from databases
