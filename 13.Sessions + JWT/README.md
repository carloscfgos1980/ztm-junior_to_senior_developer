## 13.Sessions + JWT

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635751

# Lesson 2. Cookies vs Tokens

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635747

- Check <Cookies vs tokens> diagram

Cookie based authentication and token based authentication is a complex topic with a lot of opinions. It's always good to learn both sides and understand the pros and cons. I will leave these resources for you to explore, but keep in mind that it is better to come back to these after you have completed this section so you have a better understanding of how everything works.

1. https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide

2. https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies

# Lesson 3. What We Are Building

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635727

- Check <cookies> diagram
- Check <tokens> diagram
- Check <tokens and cookies> diagram

The authentification system wea re gonna build will apply both approach (Cookies and tokens), storing data in redis database

# Lesson 4. JWT

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635734

in google chrome go to the tab of "developer" and then "application". There I can see the cookies

# Lesson 5. Project Goals

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635743

1. Copy the full stack app from Docker section

2. smart-brain-api, run in the terminal
   docker-compose up --build

- Here I met an issue coz I already had this image running in docker so I need to stop it:

1. run
   docker ps
2. grab the id
3. docker stop [id]

**seed data**
login: a@a.com
pwd:a

# Lesson 6. Profile Icon

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635755

- Using Reacstrap in order to use cool components
  https://reactstrap.github.io/?path=/story/home-installation--page

1. Install reactstrap
   npm install reactstrap react react-dom

npm install --save bootstrap

2. src/index.js => Settings for reactstrap:

import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import "./index.css";

- The last CSS will overwrite the previos format, that is why this irder so the font style that comes with React prevails

3. Create a icon for the nav bar from tachyons:
   3.1 src/components => Create a folder to handle icons: Profile
   3.2 inide Profile, create a file ProfileIcon.js:

import React from "react";
import batman_vatar from './batman_avatar.webp';

class ProfileIcon extends React.Component{
constructor(props){
super();
this.state = {
dropdownOpen: false
}
}
render(){
return (

<div class="pa4 tc">
<img
                src={batman_vatar}
                class="br-100 ba h3 w3 dib" alt="avatar"
                />
</div>
)
}
}

export default ProfileIcon

Issues:

- Website in blank because I didn't include:
  import React from "react";
- The image from tychons website was not availe so I downloaded a different image I rendered as a logo

  3.3 Website where to get the script for for the avatar

  3.4 Get batman_vatar from Free avatar website:

https://www.google.com/search?client=safari&sca_esv=3d253444b6be7bd5&channel=mac_bm&sxsrf=ADLYWIJleV9diVmQJ0qy_SLNQ2LMpAv0og:1724814661528&q=free+avatar+icons&uds=ADvngMjDJRvCoZLRNaARKvvM3D8nH_blD6tR-bpSEtu5OcXJL2EZGITagu4puGMYiP-htnvNW-avhUPWiV9VZ45Ub8vzxMIqjYvog9n5vBMcdfPoAOFLlp0cKsgLpD7F7kQ_qZbjzw79&udm=2&sa=X&ved=2ahUKEwjzs9Cp25aIAxWQ-LsIHVliA7AQxKsJegQIDRAB&ictx=0&biw=1152&bih=656&dpr=1#vhid=R8KDEmgrP7uSQM&vssid=mosaic

http://tachyons.io/components/

4. src/app.js => change the initial state while developing so we don't need to login all the time

const initialState = {
...
route: 'home',
...
}

5. src/app.js => Change the initial state of isSignedIn to true so we can see the icon
   const initialState = {
   ...
   isSignedIn: true,
   ...
   }

# Lesson 7. Profile Dropdown

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635742

- I need to move around a few thing coz it was not working and the tutorial video is outdated!

1. Go to reactstrap website and look for button dropdown:
   https://reactstrap.github.io/?path=/docs/components-dropdown--split-button

2. src/components/Profile/ => Create ButtonIcon.js and Copy that coide from reactstrap:

import React, { useState } from 'react';
import {
Dropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProfileIcon from './ProfileIcon';

const ButtonIcon = ({ direction, ...args }) => {
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>
            <ProfileIcon/>
        </DropdownToggle>
        <DropdownMenu {...args}
        className='b--transparent shadow-5'
        style={{marginTop: '20px', backgroundColor: 'rgba(255, 255,255,0.5'}}>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Signout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    )

}

ButtonIcon.propTypes = {
direction: PropTypes.string,
};

export default ButtonIcon;

---

- Types from react:
  import PropTypes from 'prop-types';

ButtonIcon.propTypes = {
direction: PropTypes.string,
};

- I adapted the code for what I need and some cool styling

# Lesson 8. Profile Styling

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635746

1.  src/App.js => Pass "onRouteChange" function as props to "ButtonIcon" element

        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /

2.  src/components/Profile/ButtonIcon.js => Apply "onRouteChange" function:

const ButtonIcon = ({ onRouteChange, direction, ...args }) => {
....

    return (

...

            <DropdownItem onClick={() => onRouteChange('signout')}>
                Sign Out
            </DropdownItem>

...
)
}

# Lesson 9. Profile Modal 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635739

# Lesson 10. Profile Modal 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635738

# Lesson 11. Profile Modal 3

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635748

- This tutorial is so fucking all that I had to find out everything for my self!

1. src/componentes/Profile/ => Create Profile.js
   This file contains the form and a buttons to collect the data

2. src/components/ = Create Modal/ModalForm.js =>

2.1 render the icon a the button to close the modal
<ProfileIcon/>
<Button color="danger" onClick={toggleModal}>
Close
</Button>

- I call a function to toggle the modal in App.js. This is old method. It is better to have the toggle function in this very component, just like the tutorial in reactstrap

3.  Render Profile component (form). Name is a bit fuck...hahaha:
    <Profile 
          toggleModal={toggleModal} 
          isProfileOpen={isProfileOpen}
        />

4.  src/App.js => Render Modal (ModalForm)

        {isProfileOpen &&
        <ModalForm
        toggleModal={this.toggleModal}
        isProfileOpen={isProfileOpen}
        />
        }

isProfileOpen && => Condictinal rendering, if isProfileOpen is true then it will show the Modal

# Lesson 12. Profile Modal 4

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635741

1.  Passing "user" props to "Profile.js" component

2.  serc/components/Profile/Profile.js:

            <div>
                <h1>{user.name}</h1>
                <h3>{`Imgage Submitted:${user.entries}`}</h3>
                <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
            </div>

It has a cool way to display the date: new Date(user.joined).toLocaleDateString()

# Lesson 13. Updating Profile 1. backend

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635736

1. smart-brain-api/controllers/profile.js => Logic for the update route:

const handleProfileUpdate = (req, res, db) => {
const { id } = req.params;
const {name, age, pet} = req.body.formInput;
db('users')
.where({id})
.update({name})
.then(resp => {
if(resp){
res.json('success')
}else {
res.status(400).json('unable to update')
}
})
.catch(err => res.status(400).json('error updating user'))
}

2. smart-brain-api/server.js => Create route:

const profile = require('./controllers/profile');

app.post('/profile/:id', (req, res) => { profile.handleProfileUpdate(req, res, db)})

# Lesson 14. Updating Profile 2. frontend

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635732

1. src/components/Profile/Profile.js => Function with switch case to change the state and handle the form

   const onFormChange = (event) => {
   console.log('event.target.name:', event.target.value)
   switch(event.target.name) {
   case 'user-name':
   setName(event.target.value)
   break;
   case 'user-age':
   setAge(event.target.value)
   break;
   case 'user-pet':
   setPet(event.target.value)
   break;
   default:
   return
   }
   }

2. Appy "onFormChange" function in the form
   <div className="mt3">
   .....
   <input
   ....
   onChange={onFormChange}
   />

# Lesson 15. Updating Profile 3

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635728

1.  src/components/Profile/Profile.js => function to post data

    const onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${user.id}`, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({formInput: data})
    }). then(resp => {
    toggleModal();
    loadUser(...user, ...data)
    }). catch(err => {
    console.log(err)
    })
    }

2.  src/components/Profile/Profile.js => Apply function in the rendered "save" button

                    <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                onClick={() => onProfileUpdate ({name, age, pet})}
                >
                    Save
                </button>

- Here I had a bug coz the URL was wrong

# Lesson 16. User Authentication. backend

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635731

1. smart-brain-api/controllers/signin.js => Turn handleSignin into a regular function. Before it returned 2 functions:
   (db, bcrypt) => (req, res) => {...}

2. smart-brain-api/controllers/signin.js => Write the signinAuthentication that will be use in the sigin route

const signinAuthentication = (db, bcrypt) => (req, res) => {
// const {authorization} = req.headers;
const authorization = false;
return authorization ? getAuthorizationToken() :
handleSignin(db, bcrypt, req, res)
.then(data => res.json(data))
.catch(err => res.status(400).json(err))
}

3. smart-brain-api/controllers/signin.js => Export signinAuthentication

4. smart-brain-api/server.js => Change the name of the function to signinAuthentication
   app.post('/signin', signin.signinAuthentication(db, bcrypt))

**note**
One funcking hour to fig this shit out. Problem was that I didn't realize when they change handleSignin into a regular function

# Lesson 17. Sending The JWT Token

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635735

1. smart-brain-api => install JWT:
   npm i jsonwebtoken

2. smart-brain-api/controllers/signin.js => Require jwt
   const jwt = require('jsonwebtoken');

3. .env create a variable for the secret

4. Create a function to sign the token:

const singToken = (email) => {
const jwtPayload = {email};
const token = jwt.sign(jwtPayload, process.env.SECRET, {expiresIn: '2 days'});
}

5. Create a function to create sessions:

const createSessions = (user) => {
const {email, id} = user;
const token = singToken(email)
return {succes:'true', userid:id, token}
}

6. "signinAuthentication" function return createSessions
   const signinAuthentication = (db, bcrypt) => (req, res) => {
   // const {authorization} = req.headers;
   const authorization = false;
   return authorization ? getAuthorizationToken() :
   handleSignin(db, bcrypt, req, res)
   .then(data => {
   return data.id && data.email ? createSessions(data) : Promise.reject(data)
   })
   .then(session => res.json(session))
   .catch(err => res.status(400).json(err))
   }

- This will send an object: {succes:'true', userid:id, token} bit the client is expecting the user data so we have to make changes in the client:

- This has me 1 hour looking for a bug. The problem was that I wasn't returning anything in the firts .then
- I comment the variable with the authorization token coz I have not implemented that yet in the client and I set it to false so it will run "handleSignin" function:
  // const {authorization} = req.headers;
  const authorization = false;

7. smart-brain/src/components/Sigin/Signin.js

Before:
.then(user => {
if (user.id) {...}...})

After:
.then(data => {
if (data.userId) {...}...})

# Lesson 18. Adding Redis. backend

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635753

1. Install redis
   npm i redis

2. smart-brain-api/docker-compose.yml => write the script to install redis in the docker image

redis:
image: redis
ports:

- "6379:6379"

3. Create a file for redis connection and require it in the server.js

4. redisConnection.js => Code to connect with redis:

const redis = require("redis");

const client = redis.createClient({
url: process.env.REDIS_URI,
});

client.on('error', err => console.log('Redis Client Error', err));

const redisConnect = async() => {
await client.connect();
}

const redisDisconnect = async () => {
await client.disconnect();
}

module.exports = {
client,
redisConnect,
redisDisconnect
}

- I copied the code from the course, and then I didn't know how to apply so I checked the offitial data myself:
  https://redis.io/docs/latest/develop/connect/clients/nodejs/

# Lesson 19. Solution: #3 - Adding Redis To Docker Compose

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635745

- To get into our redis database in hte docker image:
  docker-compose exec redis redis-cli

# Lesson 20. Storing JWT Tokens

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635733

smart-brain-api/controllers/signin.js

1. Require client from the redis connection file(redisConnection.js)
   const {client} = require('../redisConnection');

2. Create a function to store data in redis. This will return a promise:

const setToken = (key, value) => {
console.log('key and value', key, value)
return Promise.resolve(client.set(key, value));
}

3. After the data is successfully store in redis then return and object to the client with the user id and the token:

const createSessions = (user) => {
const {email, id} = user;
const token = singToken(email);

return setToken(token, id)
.then(() => {
return {succes:'true', userid:id, token}
})
.catch(err => console.log(err))
}

It is finally working@!
I can check it out the data in redis likes this:
docker-compose exec redis redis-cli
GET [key]

key => is the token that i can copy from the client

# Lesson 21. Retrieving Auth Token. backend

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635729

smart-brain-api/controllers/signin.js

1. Implement "getAuthTokenId" funfion. this check if the token sent by the client, exist in the data base

const getAuthTokenId = () => {
const {authorization} = req.headers;
return redisClient.get(authorization, (err, replay) => {
if(err || !replay){
return res.status(400).json('Unauthorized')
}
return res.json({id:replay})
})
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
...
return authorization ? getAuthTokenId(req, res) :
....
}

# Lesson 22. Client Session Management

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635730

/smart-brain/

1. /src/components/Signin/Sigin.js => Create a function to save the token we get from the server
   saveAuthTokenInSessions = (token) => {
   window.sessionStorage.setItem('token', token)
   }

2. /src/components/Signin/Sigin.js => call the function inside then method:

onSubmitSignIn = () => {
....
if (data.userId && data.success === 'true') {
this.saveAuthTokenInSessions(data.token)
...
}

3. /App.js => Use componentDidMount to fetch the signin route once we have log in and we refresh:

componentDidMount(){
const token = window.sessionStorage.getItem('token');
if(token){
fetch('http://localhost:3000/signin', {
method: 'post',
headers: {
'Content-Type': 'application/json',
'Authorization': token
}
})
.then(response => response.json())  
 .then(data => {
if (data && data.id) {
console.log('success, we need to get user profile')
}
})
.catch(err => console.log(err))
}
}

# Lesson 23. Session Sign In

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635749

/smart-brain/

1.  App.js => fetch the profile after checking the token:

    .then(data => {
    if (data && data.id) {
    fetch(`http://localhost:3000/profile/${data.id}`, {
    method: 'post',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': token
    }
    })
    .then(response => response.json())
    .then(user => {
    if(user && user.email){
    this.loadUser(user);
    this.onRouteChange('home');
    }
    })
    .catch(err => console.log(err))
    }
    })

2.  /src/components/Signin/Sigin.js => fetch the profile after checking the token:

        if (data.userId && data.success === 'true') {
            this.saveAuthTokenInSessions(data.token)
            fetch(`http://localhost:3000/profile/${data.userId}`, {
                method: 'get',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': data.token
                  }
              })
              .then(response => response.json())
              .then(user => {
                  if (user && user.email){
                    this.props.loadUser(this.props.user);
                    this.props.toggleModal()
                    this.props.onRouteChange('home');
                  }
              })
        }

- This is a bit repetitive so I could use just one function since it is the same logic

# Lesson 24. Authorization Middleware. server

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635740

1. Create a folder and file for middleware: middleware/authorization.js:
   const {redisClient }= require('../redisConnection');

const requireAuth = (req, res, next) => {
const {authorization} = req.headers;
console.log('middleware headers', authorization)

    if(!authorization){
        return res.status(401).json('unauthorized')
    }

    if(authorization){
        redisClient.get(authorization, (err, replay) =>{
            if(err || !replay){
                return res.status(401).json('unauthorized')
            }
            console.log('you shall pass');
        })
    }
    next();

}

module.exports = {
requireAuth,
}

- The app wasn't working coz a bug in the middleare. In the tutorial "next" is called inside the checking and it wasn't triggering, it must be at the very end of the function

2. server.js => Protect the routes with middleware:

const { requireAuth } = require('./middleware/authorization');

app.get('/profile/:id', requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', requireAuth,(req, res) => { profile.handleProfileUpdate(req, res, db)})
app.put('/image', requireAuth, (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', requireAuth, (req, res) => { image.handleApiCall(req, res)})

# Lesson 25. Fixing A Bug

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635737

1. Client: Profile.js => Update the headrs for profile post request

   const onProfileUpdate = (data) => {

....
'Authorization': window.sessionStorage.getItem('token')
...
}

2.  Client: Profile.js => Apply "then" method and check if the response is ok, then update state and call toggleModal function to close the Modal

        const onProfileUpdate = (data) => {

    ....
    }). then(resp => {
    if(resp.status === 200 || resp.status === 304){
    toggleModal();
    loadUser(...user, ...data)
    }
    .....
    })}

# Lesson 26. Reviewing Our Code

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635744

# Lesson 27. Updating Our App

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/13138712

- Update bcrypt npm package
- Update Node version in Dockerfile (if need it)
- Update Docker-compose version (if need it)

**TIPS**

- It is our job as developer to keep the library updated, check the documentation, some times the update breaks the functionality of the app
- Minimize the amount of library (npm packages) that we use coz it is more stuff to keep in mind to update

# Lesson 28. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12635752

- Codebase that we can use to extend in our projects
- How to use sessions and JWT to have full access and control over the users
- We use postgres to storage tue user data
- We use redis to store User Id and the token created for the session
- This code is very messy. The app is not complete but I won't do it. Just Update the tables in postgress for the "pet" and "age" state
