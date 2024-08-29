## smart-brain app

1. Fork the projects:
   https://github.com/aneagoie/smart-brain
   https://github.com/aneagoie/smart-brain-api

2. git clone repositories
3. npm install
4. Open Valentina Studio to handle postgres database
5. Create a new database "smart-brain"
   5.1 Create Table "users" and "login":

CREATE TABLE users(
id serial PRIMARY KEY,
"name" VARCHAR(100),
email TEXT UNIQUE NOT NULL,
entries BIGINT DEFAULT 0,
joined TIMESTAMP not NULL
);

CREATE TABLE login(
id serial PRIMARY KEY,
hash VARCHAR(100) not null,
email text UNIQUE NOT NULL
);

6. Create .env to protect sensitive info

7. smart-brain-api/server => Set up for the connection to the database:
   require('dotenv').config();
   const myPwd = process.env.MY_PASSWORD;
   const db = knex({
   // connect to your own database here:
   client: 'pg',
   connection: {
   host : '127.0.0.1',
   user : 'postgres',
   password : myPwd,
   database : 'smart-brain'
   }
   });

8. Create a API key in "clarifai" website. It is for face recognition with AI
   https://clarifai.com/carlos-cuba_2024/my-first-application-hx9pz/settings

9. smart-brain-api/controllers/image.js => Copy the API key:
   require('dotenv').config();
   const CLARIFAI_API_KEY = process.env.CLARIFAI_API_KEY;
   const app = new Clarifai.App({
   apiKey: '6841f67d0da44b428629fd6473a1b627'
   });

10. Try the app.
    The source for the face pics:
    https://stockcake.com/i/joyful-crowd-celebrating_1180751_1055388

# Make changes to Multiple Face Detection

11. Analize the code

12. brain-smart/src/app => Make changes to calculateFaceLocations function.
    12.1 I will loop over calculateFaceLocation funtion
    before:
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

after:
return data.outputs[0].data.regions.map(face =>{
const clarifaiFace = face.region_info.bounding_box;
...
})
12.2 return the loop
12.3 include the rest of the elements inside the returned loop
12.4 change the name of the function to beaccurate descriptive:
"calculateFaceLocation" => "calculateFaceLocations"
12.5 Make also the name to whereever this function is implemented

13. brain-smart/src/app => Outdate state of the box to boxes. Instead of an object, we will get an array of object (boxes)

13.1 Change the function used to handle the state of the boxes (square area for the face recognition)
before:
displayFaceBox = (box) => {
this.setState({box: box});
}
after:
displayFaceBoxes = (boxes) => {
this.setState({boxes: boxes});
}

13.2 Change the name of this function wherever is used
13.3 change the initial state of box {} to boxes[]
13.4 in the render change "box" to "boxes"
const { isSignedIn, imageUrl, route, boxes } = this.state;
<FaceRecognition boxes={boxes} imageUrl={imageUrl} />

</div>
13.5 brain-smart/src/components/FaceRecognition/FaceRecognition.js
13.6 update the props: boxes
const FaceRecognition = ({ imageUrl, boxes }) => {
...
}
13.7 loop thru boxes array and thisplay the objects. Before it was only one object
Bebore:
<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
After:
{boxes.map(box => {
return (
<div key={box.bottomRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>  
 )
})}

# Tada.... the end

- First try it failed.. it has to do with the image with multiple faces selected, then I selected a different one and it was perfect
  exmaple:
  https://getdex.com/blog/content/images/size/w960/2022/09/how-to-be-a-people-person-1662995088.jpg

**Note**
I will create a new branch (multifaces) for smart-brain (client) in order to also keep a version for a single face recognition (master)
